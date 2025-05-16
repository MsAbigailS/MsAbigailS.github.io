import { useEffect, useRef, useState } from 'react';
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
    children
}: ElementAnimationProps) => {
    const [tilt, setTilt] = useState<{ x: number; y: number }>();
    const parentRef = useRef<HTMLDivElement>(null);

    // removing any margins from children
    // ensures animation covers childred
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

    })

    // tilt animations
    useEffect(() => {
        if (animation !== 'tilt' || !parentRef) return

        const handleMouseMove = (e: MouseEvent) => {
            if (!parentRef.current) return

            // defining quad bounds
            const x = e.clientX - parentRef.current.getBoundingClientRect().left
            const y = e.clientY - parentRef.current.getBoundingClientRect().top
            const maxWidth = parentRef.current.getBoundingClientRect().width
            const maxHeight = parentRef.current.getBoundingClientRect().height

            // identify if mouse in bounds & quad
            // TODO: see if we can make tilt direct more apparent lol
            if (x > 0 && x < maxWidth && y > 0 && y < maxHeight) {
                if (x < maxWidth * 0.5 && y < maxHeight * 0.5) {
                    setTilt({ x: -30, y: 30 }) // top left
                } else if (x > maxWidth * 0.5 && y < maxHeight * 0.5) {
                    setTilt({ x: -30, y: -30 }) // top right
                } else if (x > maxWidth * 0.5 && y > maxHeight * 0.5) {
                    setTilt({ x: 30, y: -30 }) // bottom right
                } else if (x < maxWidth * 0.5 && y > maxHeight * 0.5) {
                    setTilt({ x: 30, y: 30 }) // bottom left
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
    }, [animation, tilt]);


    return (
        <div
            id="root"
            ref={parentRef}
            className={
                `inline-flex w-fit perspective 
                ${children === undefined ? 'size-10' : ''} 
                
                ${animation === 'tilt' ? 'preserve-3d transition-transform ease-in-out' : ''}`
            }
        >
            {children}
        </div>
    );
};
