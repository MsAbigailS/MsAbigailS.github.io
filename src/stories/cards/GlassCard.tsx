import { useMemo } from 'react';
import { complementaryColor, hexToRgba, rgbaToHex } from '../helpers/colors';
import { Card } from '../ui/Card';

export interface GlassCardProps {
    color?: string;
    children?: React.ReactNode;
}

export const GlassCard = ({
    color = 'rgba(191,139,133,0)',
    children
}: GlassCardProps) => {

    const dataId = 'shape';
    const shadow = useMemo(() => {
        return `shadow-[${color}]`
    }, [color]);
    // https://t4.ftcdn.net/jpg/02/99/47/75/360_F_299477563_cdcjnsMv6oM3AUZzzvx9RKByDCsXiryB.jpg
    return (
        <Card>


            <div
                data-id={dataId}
                className={
                    `relative p-6 rounded-lg border border-white/20  
                    backdrop-blur-lg text-white mx-auto
                    h-full w-full
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    `
                }
            // style={{ backgroundColor: color || 'rgba(0,0,0,0.15)' }}
            >

                {/* Top border glow */}
                <div className="absolute top-0 left-0 h-[5px] w-1/3 bg-white/5 blur-sm rounded-tl z-20 animate-pulse-slow"></div>

                {/* Left border glow */}
                <div className="absolute top-0 left-0 w-[5px] h-1/2 bg-white/5 blur-sm rounded-tl z-20 animate-pulse-slow"></div>


                <div
                    className={`absolute inset-0 bg-radial 
                    from-transparent from-95% to-white/5`}
                ></div>

                <div
                    data-id={`${dataId}-diagonal-shine`}
                    className="absolute inset-0 
                    bg-gradient-to-br from-white/5 via-blue-300/5 to-blue-500/5 z-0 rounded-lg"
                ></div>

                {children}


            </div>

        </Card>
    );
};
