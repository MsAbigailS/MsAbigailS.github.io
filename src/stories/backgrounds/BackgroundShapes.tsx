import { useMemo } from 'react';
import { Shape } from '../ui/Shape';

export interface BackgroundShapesProps {
    shapes?: ('circle' | 'square' | 'triangle')[];
    density?: 'low' | 'medium' | 'high';
}

export const BackgroundShapes = ({
    shapes = ['circle'],
    density = 'medium'
}: BackgroundShapesProps) => {
    const dataId = 'background-shapes';

    const densityLimit = useMemo(() => {
        if (density === 'low') return 5;
        if (density === 'medium') return 10;
        if (density === 'high') return 20;
        return 10;
    }, [density])

    // randomizing shape location on screen
    const randomizePosition = () => {
        return {
            top: `${Math.floor(Math.random() * window.innerHeight)}px`,
            left: `${Math.floor(Math.random() * window.innerWidth)}px`
        }
    }

    return (
        <div
            data-id={dataId}
            className={`absolute min-w-full min-h-full border-2 border-pink-500`}
        >
            {Array.from({ length: densityLimit }).map((_, index) => {
                const pos = randomizePosition();
                console.log(`Shape ${index + 1} position: ${pos}`);
                return (
                    <div
                        key={index}
                        className={`border-2 absolute`}
                        style={
                            {
                                top: pos.top,
                                left: pos.left,

                            }
                        }
                    >
                        <Shape
                            shape='circle'
                            bgColor='bg-[#BF8B85]'
                            size='medium'
                        />
                    </div>
                )
            })}
        </div>
    );
};
