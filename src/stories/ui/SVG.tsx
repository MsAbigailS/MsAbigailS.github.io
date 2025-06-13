import { useEffect, useRef, useState } from 'react'

export interface SVGProps {
    svg: React.ReactNode,
    primaryColor?: string,
    secondaryColor?: string
}

export const SVG = ({
    svg,
    primaryColor = 'blue',
    secondaryColor = 'red'
}: SVGProps) => {

    return (
        <span
            className="[mask-image:linear-gradient(to_top,rgba(13,28,43,1),rgba(24,42,57,0.3))]
                    [mask-size:100%]
                    [mask-repeat:no-repeat]
                    size-5 md:size-10 
                    *:size-5 *:md:size-10"
        >
            {svg}
        </span>
    );
};
