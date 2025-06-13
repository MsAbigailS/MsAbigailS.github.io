import { TextAnimation } from "./TextAnimation";
import { Image } from "./Image";
import imageSource from '../../assets/typing.png';
import { GlassCard } from "../cards/GlassCard";
import { ElementAnimation } from "./ElementAnimation";
import { BubbleCard } from '../cards/BubbleCard'
import { ListCard } from '../cards/ListCard'
export interface AboutMeProps {

}

export const AboutMe = ({

}: AboutMeProps) => {
    const dataId = 'about-me';
    const aboutMeImg = {
        "resource": 'typing.png',
        "alt": "About me image"
    }

    const listFormat = "list-disc list-inside space-y-1 text-gray-300"

    return (
        <div>
            <div className="relative">
                <div className="border-2 *:absolute size-100 *:h-70 *:w-70">
                    <div
                        className="rotate-z-5 translate-y-70 z-5"
                    >
                        <ListCard
                            title="Languages"
                            svg={(<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                            </svg>
                            )}
                            items={["TypeScript", "JavaScript", "Python", "+ more"]}
                        />
                    </div>

                    <div
                        className="-rotate-z-5 translate-x-50 z-4"
                    >
                        <ListCard
                            title="Back-End"
                            items={["REST API", "item2", "item3", "+ more"]}
                        />
                    </div>

                    <div
                        className="z-3 translate-x-100 translate-y-20 rotate-z-2 hover:z-99"
                    >
                        <ListCard
                            title="Front-End"
                            items={["UI/UX", "item2", "item3", "+ more"]}
                        />
                    </div>
                </div>

                <BubbleCard>
                    Beyond the Code
                    I'm a nerd at heart! When I'm not coding, I'm usually playing video grames, taking care of my growing plant collection, or trying to get my hands on some coffee.
                </BubbleCard>
            </div>
        </div>
    );
};
