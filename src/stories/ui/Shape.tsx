import { useMemo } from 'react';

export interface ShapeProps {
    shape?: 'circle'
    bgColor?: string;
    size?: 'small' | 'medium' | 'large';
    randomSize?: boolean
}

export const Shape = ({
    shape = 'circle',
    bgColor = 'bg-red-500',
    size = 'small',
    randomSize = false
}: ShapeProps) => {
    const dataId = 'shape';

    const dim = useMemo(() => {
        return size === 'small' ? 'size-10' : size === 'medium' ? 'size-25' : size === 'large' ? 'size-50' : size;
    }, [size]);

    return (
        <div
            data-id={dataId}
            className={`${shape === 'circle' ? 'rounded-full' : ''} ${bgColor} ${dim}`}
        >
        </div>
    );
};
