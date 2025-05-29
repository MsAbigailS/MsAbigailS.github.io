import { useMemo } from 'react';
import { Shape } from '../ui/Shape';
import { randomPosition, randomEvenDistributedPositions } from '../helpers/positions';

export interface BackgroundShapesProps {
    shapes?: ('circle')[];
    density?: 'low' | 'medium' | 'high';
    sizes?: ('small' | 'medium' | 'large')[];
}

export const BackgroundShapes = ({
    shapes = ['circle'],
    density = 'medium',
    sizes = ['large']
}: BackgroundShapesProps) => {
    const dataId = 'background-shapes';

    const densityLimit = useMemo(() => {
        if (density === 'low') return Math.floor(Math.random() * 2) + 2;
        if (density === 'medium') return Math.floor(Math.random() * 2) + 10;
        if (density === 'high') return Math.floor(Math.random() * 2) + 20;
        return 10;
    }, [density])

    const pos = useMemo(() => {
        return randomEvenDistributedPositions(densityLimit, screen.availHeight, screen.availWidth);
    }, [window]);

    return (
        <div
            data-id={dataId}
            className={`absolute min-w-full min-h-full overflow-hidden pointer-events-none`}
        >
            {Array.from({ length: densityLimit }).map((_, index) => {

                return (

                    <div
                        key={index}
                        className={`absolute ${pos[index].top} ${pos[index].left}
                            ${Math.floor(Math.random() * 2) % 3 === 0 ? 'animate-float-slow opacity-50 blur-[2px] scale-75'
                                : Math.floor(Math.random() * 2) % 3 === 0 ? 'animate-float-medium opacity-70 blur-[1px] scale-90'
                                    : 'animate-float-medium opacity-90 scale-100'

                            } 

                            pointer-events-none`}
                        style={{
                            top: pos[index].top,
                            left: pos[index].left
                        }}
                    >
                        <Shape
                            shape='circle'
                            bgColor='bg-[#BF8B85]'
                            size={sizes[0]}
                            gradient={true}
                        />
                    </div>
                )
            })}
        </div>
    );
};
