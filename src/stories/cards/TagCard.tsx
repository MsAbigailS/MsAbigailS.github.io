import { Children, useMemo } from 'react';
import { Card } from '../ui/Card';
import { SVG } from '../ui/SVG';
import { darken, hexToRgba, rgbaToHex } from '../helpers/colors'

export interface TagCardProps {
    /** Text to show */
    text: string;
    /** SVG to show */
    svg?: string;
    /** Background color */
    color?: string;
    /** Size */
    size: 'sm' | 'md' | 'lg' | 'xl'
    /** Order of text vs svg */
    flip?: boolean
    /** Position of text vs svg */
    position?: 'left' | 'middle' | 'right'
}

export const TagCard = ({
    text,
    svg = 'none',
    color,
    size,
    flip = false,
    position = 'middle'
}: TagCardProps) => {

    let colorTrim = useMemo(() => {
        return color?.substring(4, color.length - 1)
    }, [])

    return (
        <Card>
            <div
                className={`flex items-center 
                    ${position === 'middle' ?
                        'justify-center text-center' :
                        position === 'left' ?
                            'justify-start text-center' :
                            'justify-end text-center'}
                    
                    rounded-2xl 
                    ${size === 'md' ? '' : size === 'sm' ? '*:mr-1 *:ml-1' : 'pt-1 pb-1 *:mr-1 *:ml-1'}
                    ${color}
                    shadow-lg shadow-gray-950/20
                    border border-gray-400/10 border-t-gray-300/5
                    `}
            >
                <div
                    id="seeme"
                    className={`flex justify-center items-center
                            ${position === 'middle' ?
                            'justify-center text-center' :
                            position === 'left' ?
                                'justify-start text-center' :
                                'justify-end text-center'}
                            ${color?.indexOf("white") !== -1 ?
                            '[mask-image:linear-gradient(to_top,rgba(13,28,43,1),rgba(24,42,57,0.3))]' :
                            'mix-blend-color-burn'}
                            w-full
                            ${flip ? 'flex-row-reverse' : ''}
                            `}
                >
                    {/* svg */}
                    <SVG
                        svg={svg}
                    />

                    {/* text */}
                    <span
                        className={`
                        ${size === 'md' ? 'text-lg mr-2' : size === 'sm' ? 'text-md mr-2' : 'text-4xl lg:text-4xl xl:text-5xl'}    
                        font-medium font-manrope
                        ${color?.indexOf('white') !== -1 ? 'text-gray-950' : 'bg-gradient-to-t from-gray-900/80 to-gray-800/80 text-transparent bg-clip-text '}
                        
                        opacity-90 text-nowrap`}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </Card >
    );
};
