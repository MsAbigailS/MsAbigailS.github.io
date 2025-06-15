import { useEffect, useRef, useState, useMemo } from 'react'
import type { SVG as SVGType } from '../../types/svg';
import { mapSvgIcon, getSource } from '../../utils/maps/svgMap'
export interface SVGProps {
    svg: string,
    primaryColor?: string,
    secondaryColor?: string
}

export const SVG = ({
    svg,
    primaryColor = 'blue',
    secondaryColor = 'red'
}: SVGProps) => {

    const [invert, setInvert] = useState(false) // determined how svg is drawn

    // getting svg
    const mappedSVG = useMemo(() => {
        return mapSvgIcon(svg)
    }, [])

    // determing invert status based on SVG source
    useEffect(() => {
        if (getSource(svg)?.indexOf("Simple Icon") === -1) {
            setInvert(false)
        } else {
            setInvert(true)
        }
    }, [mappedSVG])

    return (
        <span
            className={`[mask-image:linear-gradient(to_top,rgba(13,28,43,1),rgba(24,42,57,0.3))]
                    [mask-size:100%]
                    [mask-repeat:no-repeat]
                    size-5 md:size-10 
                    *:size-5 *:md:size-10
                    
                    ${invert ? '**:fill-current *:text-gray-800 *:stroke-none' : ''}
                    `}
        >
            {mappedSVG}
        </span>
    );
};
