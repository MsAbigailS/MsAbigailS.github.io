import { useMemo } from 'react';
import { complementaryColor, hexToRgba, rgbaToHex } from '../helpers/colors';

export interface ShapeProps {
    shape?: 'circle'
    bgColor?: string;
    size?: 'small' | 'medium' | 'large';
    randomSize?: boolean;
    gradient?: boolean;
}

export const Shape = ({
    shape = 'circle',
    bgColor = 'bg-red-500',
    size = 'small',
    randomSize = false,
    gradient = false
}: ShapeProps) => {
    const dataId = 'shape';

    const dim = useMemo(() => {
        return size === 'small' ? 'size-10' : size === 'medium' ? 'size-25' : size === 'large' ? 'size-50' : size;
    }, [size]);

    bgColor = useMemo(() => {
        if (gradient) {
            // let endColor = `[${rgbaToHex(complementaryColor(bgColor.replace('bg-[', '').replace(']', '')))}]`
            // bgColor = `bg-gradient-to-bl from-${bgColor} to-${endColor}`;
            return bgColor
        }
        return bgColor;
    }, [bgColor, gradient]);


    return (
        <div
            data-id={dataId}
            className={`${shape === 'circle' ? 'rounded-full *:rounded-full' : ''} ${bgColor} 
            ${dim}  
            ${gradient ? `${bgColor}` : ''}`}
        >
        </div>
    );
};
