import { useEffect, useRef, useState, useMemo } from 'react';
import type { ReactNode } from 'react';

export type ElementAnimationProps = {
    /** Which animation to use */
    animation: 'tilt' | 'shine'
    /** What element(s) to animate */
    children?: ReactNode
    /** What speed the animation plays at */
    speed?: 'slow' | 'medium' | 'fast'
};

export const ElementAnimation = ({
    animation,
    children,
    speed = 'medium'
}: ElementAnimationProps) => {
    const [tilt, setTilt] = useState<{ x: number; y: number }>();
    const parentRef = useRef<HTMLDivElement>(null);
    const maxRotation = 25
    const speeds = {
        'slow': 'duration-1000',
        'medium': 'duration-500',
        'fast': 'duration-200'
    }

    // removing any margins from children
    // ensures animation covers childred fully
    useEffect(() => {
        if (!parentRef.current) return

        // for each child, search through style
        Array.from(parentRef.current.children).map((child) => {
            Array.from(child.className.split(' ')).map((style) => {
                // removes margin
                if (style.match('m-')) {
                    child.className = child.className.replace(style, '')
                }
            })
        })
    }, [parentRef?.current?.children]);

    // setting animation speed
    useEffect(() => {
        if (!parentRef.current) return
        if (!parentRef.current.className.match('duration-')) {
            parentRef.current.className += ` ${speeds[speed]}`
        }
    }, [speed])

    // set dimensions before animating
    const maxW = useMemo(() => {
        if (!parentRef.current) return 0
        return parentRef.current?.getBoundingClientRect().width
    }, [parentRef?.current])
    const maxH = useMemo(() => {
        if (!parentRef.current) return 0
        return parentRef.current?.getBoundingClientRect().height
    }, [parentRef?.current])
    const left = useMemo(() => {
        if (!parentRef.current) return 0
        return parentRef.current?.getBoundingClientRect().left
    }, [parentRef?.current])
    const top = useMemo(() => {
        if (!parentRef.current) return 0
        return parentRef.current?.getBoundingClientRect().top
    }, [parentRef?.current])

    // tilt animations
    useEffect(() => {
        if (animation !== 'tilt' || !parentRef) return
        const handleMouseMove = (e: MouseEvent) => {
            if (!parentRef.current) return

            // user mouse pos
            const x = e.clientX - left
            const y = e.clientY - top

            // set relative pos
            let halfWidth = (maxW * 0.5)
            let halfHeight = (maxH * 0.5)
            let yRotation = maxRotation / (parentRef.current?.getBoundingClientRect().width)
            let xRotation = maxRotation / (parentRef.current?.getBoundingClientRect().height)
            let yUnseenBounds = ((maxW) * (1 - Math.cos(yRotation)))
            let xUnseenBounds = ((maxH) * (1 - Math.cos(xRotation)))

            // setting tilt degrees
            if (x > yUnseenBounds && x < (maxW - yUnseenBounds) && y > xUnseenBounds && y < (maxH - xUnseenBounds)) {
                let xDistOrigin = 0
                let yDistOrigin = 0

                // determ relative dist and set degree tilt
                if (x > halfWidth) {
                    xDistOrigin = x - ((halfWidth) - yUnseenBounds)
                } else {
                    xDistOrigin = ((halfWidth) - yUnseenBounds) - x
                }

                yRotation = yRotation * xDistOrigin

                if (y > halfHeight) {
                    yDistOrigin = Math.round(y - ((halfHeight) - xUnseenBounds))
                } else {
                    yDistOrigin = Math.round(((halfHeight) - xUnseenBounds) - y)
                }
                xRotation = xRotation * yDistOrigin

                // determining quad mouse in
                if (x < halfWidth && y < halfHeight) {
                    // top left
                    setTilt({ x: -1 * xRotation, y: yRotation })
                } else if (x > halfWidth && y < halfHeight) {
                    // top right
                    setTilt({ x: -1 * xRotation, y: -1 * yRotation })
                } else if (x > halfWidth && y > halfHeight) {
                    // bottom right
                    setTilt({ x: xRotation, y: -1 * yRotation })
                } else if (x < halfWidth && y > halfHeight) {
                    // bottom left
                    setTilt({ x: xRotation, y: yRotation })
                }
            } else {
                setTilt({ x: 0, y: 0 })
            }

            // tilting or resetting
            parentRef.current.style.transform = `rotateX(${tilt?.x}deg) rotateY(${tilt?.y}deg)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [parentRef, animation, tilt]);

    return (
        <div
            id="root"
            ref={parentRef}
            className={
                `inline-flex w-fit perspective
                ${children === undefined ? 'size-10' : ''} 
                ${animation === 'tilt' ? 'preserve-3d transition-transform ease-out duration-700' : ''}`
            }
        >
            {children}
        </div>
    );
};
