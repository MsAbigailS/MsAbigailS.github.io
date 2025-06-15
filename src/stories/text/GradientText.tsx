import { Children, useMemo, useEffect } from 'react';
import { Card } from '../ui/Card';
import { SVG } from '../ui/SVG';
import { darken, hexToRgba, rgbaToHex } from '../helpers/colors'

export interface GradientTextProps {
    /** Text to show */
    text: string;
    /** Size of text */
    size?: string
    primaryColor?: string
    secondaryColor?: string
    weight?: string
}

export const GradientText = ({
    text,
    size,
    primaryColor = "blue",
    secondaryColor = "pink",
    weight
}: GradientTextProps) => {

    // formatting color to gradient
    primaryColor = useMemo(() => {
        if (primaryColor === 'white') {
            return 'from-white'
        } else if (primaryColor.indexOf('from-') != -1) {
            return primaryColor
        }
        return 'from-' + primaryColor + '-900/100'
    }, [])

    // formatting color to gradient
    secondaryColor = useMemo(() => {
        if (secondaryColor === 'white') {
            return 'to-white'
        } else if (secondaryColor.indexOf('from-') != -1) {
            return secondaryColor
        }
        return 'to-' + secondaryColor + '-900/100'
    }, [])

    return (
        <Card>
            <div
            >
                {/* text */}
                <span
                    className={`
                        font-manrope
                        ${weight}
                        ${size} 
                        bg-gradient-to-t ${primaryColor} ${secondaryColor} text-transparent bg-clip-text 
                        opacity-100
                        `}
                >
                    {text}
                </span>
            </div>
        </Card >
    );
};
