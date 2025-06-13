import { Children, useMemo } from 'react';
import { Card } from '../ui/Card';
import { SVG } from '../ui/SVG'

export interface ListCardProps {
    primaryColor?: string,
    secondaryColor?: string,
    svg?: React.ReactNode,
    title: string,
    items: string[]
}

export const ListCard = ({
    primaryColor = "#D6E4FF",
    secondaryColor = "white",
    title,
    items,
    svg
}: ListCardProps) => {

    let bannerColor = "bg-[" + primaryColor + "]"
    let itemsColor = "text-[" + primaryColor + "]"


    return (
        <Card>
            <div
                className={`rounded-4xl
                    overflow-hidden
                    w-full h-full shadow-lg shadow-gray-50/20 
                    border border-gray-400/10 border-t-gray-300/5 
                    flex flex-col *:p-6 bg-gray-950
                    `}
            >
                <div className={`${bannerColor}`}>
                    <div className="flex mix-blend-color-burn justify-center items-center">
                        <span
                            className={`text-2xl lg:text-2xl xl:text-3xl font-medium font-manrope p-2
                            bg-gradient-to-t from-gray-900/80 to-gray-800/80 text-transparent bg-clip-text 
                            opacity-90`}
                        >
                            {title}
                        </span>
                    </div>
                </div>

                <div
                    className={`${itemsColor} text-xl`}
                >
                    {items.map(word => (
                        <div key={word}>{word}</div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
