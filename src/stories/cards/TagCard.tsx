import { Children, useMemo } from 'react';
import { Card } from '../ui/Card';
import { SVG } from '../ui/SVG';
import { darken, hexToRgba, rgbaToHex } from '../helpers/colors'

export interface TagCardProps {
    /** Text to show */
    text: string;
    /** SVG to show */
    svg?: React.ReactNode;
    /** Background color */
    color?: string;
}

export const TagCard = ({
    text,
    svg,
    color = 'bg-[#FFFFFF]'
}: TagCardProps) => {


    return (
        <Card>
            <div
                className={`flex items-center justify-center text-center
                    rounded-2xl pt-1 pb-1
                    *:mr-1 *:ml-1
                    ${color}
                    shadow-lg shadow-gray-950/20
                    border border-gray-400/10 border-t-gray-300/5
                    `}
            >
                <div className="flex mix-blend-color-burn justify-center items-center">
                    {/* svg */}
                    <SVG
                        svg={(
                            <span
                                className="[mask-image:linear-gradient(to_top,rgba(13,28,43,1),rgba(24,42,57,0.3))]
                                [mask-size:100%]
                                [mask-repeat:no-repeat]
                                size-5 md:size-10 
                                *:size-5 *:md:size-10"
                            >
                                {svg}
                            </span>)
                        }
                    />


                    {/* text */}
                    <span
                        className={`text-4xl lg:text-4xl xl:text-5xl font-medium font-manrope
                    bg-gradient-to-t from-gray-900/80 to-gray-800/80 text-transparent bg-clip-text 
                    opacity-90 text-nowrap`}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </Card >
    );
};
