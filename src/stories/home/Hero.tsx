import { Image } from '../ui/Image'
import { BubbleCard } from '../cards/BubbleCard'
import { Pile } from '../animation/Pile'
export interface HeroProps {
}

export const Hero = ({
}: HeroProps) => {
    return (
        <BubbleCard>
            <div
                data-id="hero"
                className="h-screen 
                flex flex-col lg:flex-row justify-center items-center
                *:flex-1/2"
            >
                {/* text */}
                <div
                    id="text"
                    className="flex flex-col justify-center items-center
                    text-center md:text-start 
                    p-10 
                    mt-30 md:mt-20 lg:mt-0"
                >
                    <div
                        className="text-8xl md:text-9xl
                        font-inknut font-bold"
                    >
                        Abigail
                    </div>
                    <div
                        data-id="sub-text"
                    >
                        Developer with 4+ years experience.
                    </div>
                </div>

                {/* visual */}
                <div
                    id="visual"
                >
                    <Pile />
                </div>
            </div>
        </BubbleCard >
    );
};
