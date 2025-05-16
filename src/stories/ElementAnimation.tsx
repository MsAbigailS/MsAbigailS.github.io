import { useEffect, useRef } from 'react';
import { Card } from './Card';
import type { ReactNode } from 'react';

export type ElementAnimationProps = {
    animation: string;
    children?: ReactNode;
};

export const ElementAnimation = ({
    animation,
    children
}: ElementAnimationProps) => {
    const childrenRef = useRef<HTMLDivElement>(null);

    // removing any margins from children
    // ensures animation covers childred
    useEffect(() => {
        if (!childrenRef.current) return

        // for each child, search through style
        Array.from(childrenRef.current.children).map((child) => {
            console.log(child.className.split(' '))
            Array.from(child.className.split(' ')).map((style) => {
                // removes margin
                if (style.match('m-')) {
                    child.className = child.className.replace(style, '')
                }
            })
        })
    }, [children]);

    return (
        <div
            id="root"
            ref={childrenRef}
            className={
                `inline-flex w-fit perspective 
                ${children === undefined ? 'size-10' : ''} 
                border-1 border-pink-500`
            }
        >
            {animation}
            {children}
        </div>
    );
};
