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
            if (x > 0 && x < (maxW) && y > 0 && y < (maxH)) {
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

        const handleMouseLeave = () => {
            if (!parentRef.current) return
            // rotate back to origin gradually
            if (parentRef.current.style.transform.includes('rotateX') || parentRef.current.style.transform.includes('rotateY')) {
                parentRef.current.style.transition = 'transform 0.5s ease-out'
                parentRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
            }
        }

        if (parentRef.current) {
            parentRef.current.addEventListener('mousemove', handleMouseMove)
            parentRef.current.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (parentRef.current) parentRef.current.removeEventListener('mousemove', handleMouseMove)
            if (parentRef.current) parentRef.current.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [parentRef, animation, tilt]);

    return (
        <div
            id="root"
            ref={parentRef}
            className={
                `inline-flex w-fit perspective
                ${children === undefined ? 'size-10' : ''} 
                ${animation === 'tilt' ? 'preserve-3d transition-transform ease-out' : ''}
                ${animation === 'shine' ? 'relative' : ''}`
            }
        >
            <div className={`
                ${animation === 'shine' ?
                    `z-20 min-w-full min-h-full absolute bg-no-repeat
                    ease-in-out duration-1000
                    bg-[linear-gradient(45deg,transparent_60%,rgba(255,249,252,.2)_70%,transparent_75%,transparent_100%)]
                    bg-[length:250%_250%,100%_100%]
                    transition-[background-position_0s_ease] bg-[position:-100%_0,0_0] 
                    hover:bg-[position:150%_0,0_0]
                `
                    :
                    'hidden'}`}>
            </div>
            {children}
        </div>
    );
};
