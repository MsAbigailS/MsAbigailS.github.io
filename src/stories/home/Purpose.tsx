import { useNavigate } from "react-router-dom"
import { GradientText } from "../text/GradientText"
import { ElementAnimation } from "../ui/ElementAnimation"
import { GlassCard } from "../cards/GlassCard"
import { TextAnimation } from "../ui/TextAnimation"
export interface PurposeProps {

}

export const Purpose = ({

}: PurposeProps) => {

    const navigate = useNavigate()

    return (
        <div
            id="purpose"
            className="mt-40"
        >
            <div
                className="w-full flex items-center justify-center text-start md:text-center h-full text-6xl md:text-8xl"
            >
                <GradientText
                    text="This Site"
                    primaryColor="from-gray-100/100"
                    secondaryColor="white"
                    weight="font-bold"
                />
            </div>

            <div className={`font-manrope mt-10 text-3xl flex justify-center items-center ease-in-out transition-opacity duration-1000`}>
                <div
                    id="callToAction"
                    onClick={() => navigate('/build-log')}
                    className={`relative m-2 p-2 border-1 border-white-500 text-white
                                hover:border-white rounded-lg overflow-hidden flex flex-col
                                justify-center items-center hover:cursor-pointer`}
                >
                    <TextAnimation
                        text="View Buildlog"
                        animation='hoverSlide'
                    />
                </div>
            </div>

            <div
                className={`p-2 mt-10 md:mt-10 flex justify-center items-center pl-10 pr-10`}
            >
                <ElementAnimation
                    animation={['shine']}
                    speed="slow"
                >

                    <div
                        className={`rounded-lg hover:ring-2 hover:ring-blue-200/20 
                            transition-all duration-300 ease-in-out
                            shadow-lg shadow-gray-500/15 `}
                    >

                        <GlassCard>

                            <div
                                className={`text-center text-5xl m-6`}
                            >
                                About This Website
                            </div>

                            <div
                                className={`flex flex-col text-center md:text-start text-xl **:p-2 font-manrope`}
                            >

                                <p>This site is my<span className="font-bold">personal playground</span>— a space where I document what I’m learning, building, and exploring as a developer.</p>


                                <div
                                    className={`text-md mt-2 font-manrope`}
                                >
                                    This includes:
                                    <ul>
                                        <li>🧩 Projects that showcase my work</li>

                                        <li>🔄 Progress logs where I track updates and milestones</li>

                                        <li>🛠️ Technical breakdowns and notes</li>

                                        <li>🎨 Explorations in UI/UX, animation, and creative development</li>
                                    </ul>
                                </div>
                                This isn’t just a portfolio — it’s a living archive of my growth, challenges, and curiosity. I built it for reflection, experimentation, and to share with anyone interested in the journey of building things from scratch.
                            </div>

                        </GlassCard>
                    </div>
                </ElementAnimation>
            </div>
        </div>
    )
}

