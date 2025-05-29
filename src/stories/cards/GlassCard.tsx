import { useMemo } from 'react';
import { complementaryColor, hexToRgba, rgbaToHex } from '../helpers/colors';
import { Card } from '../ui/Card';

export interface GlassCardProps {
    color?: string;
    children?: React.ReactNode;
}

export const GlassCard = ({
    color = 'rgba(191,139,133,0.15)',
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
                    backdrop-blur-lg shadow-lg text-white mx-auto
                    shadow-[0_4px_30px_rgba(191,139,133,0.3)]
                    h-full w-full
                    transition-all duration-300 ease-in-out
                    overflow-hidden
                    `
                }
                style={{ backgroundColor: color || 'rgba(0,0,0,0.15)' }}
            >

                <div
                    className="absolute inset-0 z-0 opacity-5 
                    bg-[url('https://t4.ftcdn.net/jpg/02/99/47/75/360_F_299477563_cdcjnsMv6oM3AUZzzvx9RKByDCsXiryB.jpg')]
                    bg-cover mix-blend-overlay"
                ></div>

                {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-7 bg-[url('https://media.istockphoto.com/id/1484130495/vector/shiny-metal-texture-silver-or-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=l-At27ry22KvWByVTGGgIEn5xMWTmVktrnxbTWaO_bQ=')] bg-cover mix-blend-overlay"></div> */}

                {/* Top border glow */}
                <div className="absolute top-0 left-0 h-[5px] w-1/3 bg-white/20 blur-sm rounded-tl z-20 animate-pulse-slow"></div>

                {/* Left border glow */}
                <div className="absolute top-0 left-0 w-[5px] h-1/2 bg-white/20 blur-sm rounded-tl z-20 animate-pulse-slow"></div>


                <div
                    className={`absolute inset-0 bg-radial 
                    from-transparent from-80% to-white/7`}
                ></div>

                <div
                    data-id={`${dataId}-diagonal-shine`}
                    className="absolute inset-0 bg-linear-135 from-white/10 
                    to-blue-500/10 z-0  rounded-lg"
                ></div>

                {children}


            </div>

        </Card>
    );
};
