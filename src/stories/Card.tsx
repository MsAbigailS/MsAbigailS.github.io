import { useMemo, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ElementAnimation } from './ElementAnimation';
import { Tag } from './Tag';

export interface CardProps {
    /** What color theme to use (if unselected, a random theme will be chosen (excluding white))*/
    theme?: 'pink' | 'white' | 'blue' | 'green' | 'orange';
    /** What title to include */
    title?: string;
    /** What description to show */
    description?: string;
    /** What technologies were used */
    technologies?: string[];
    /** When was the project completed */
    completed?: string;
    /** What link to show */
    url?: string;
    /** What cover image to inclue */
    image?: string;
    /** What video to include */
    video?: string;
    /** What complexity to show */
    complexity?: string;
    /** What challenges to show */
    challenges?: string[];
    /** What awards to show (array of key-value pairs) */
    awards?: { key: string; values: string[] }[];
};

export const Card = ({
    theme,
    title = 'Card Title',
    description = 'Card Description',
    technologies = ['tech1', 'tech2', 'tech3'],
    completed = 'Date completed',
    url,
    image,
    video,
    complexity,
    challenges,
    awards = [
        { key: 'Award 1', values: ['Award 1.1', 'Award 1.2'] },
        { key: 'Award 2', values: ['Award 2.1', 'Award 2.2'] }
    ],
}: CardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [activeSlide, setActiveSlide] = useState({ x: '', y: '' }); // amount needed to move
    const cardRef = useRef<HTMLDivElement>(null);
    // card dimensions
    const cardDims = {
        card: 'min-h-98 max-h-98 min-w-75 max-w-75',
        inner: 'min-h-94 max-h-94 min-w-71 max-w-71'
    }

    useEffect(() => {
        if (!cardRef.current) return
        setPos({
            x: cardRef.current.getBoundingClientRect().x,
            y: cardRef.current.getBoundingClientRect().y
        })
        setActiveSlide({
            x: `-translate-x-[` + Math.round(cardRef.current.getBoundingClientRect().x).toString() + `px]`,
            y: `translate-y-0`
        })
    }, [])

    // random select theme if no theme selected
    const colors = ['blue', 'green', 'orange', 'pink', 'red']
    const bgColor = useMemo(() => {
        if (theme === undefined) {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + colors[Math.floor(Math.random() * colors.length)]).replace(/"/g, '')
        } else {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
        }
    }, [])

    // getting text color
    let txtColor = useMemo(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    }, [])

    // counting awards
    const awardCount = useMemo(() => {
        let count = 0
        awards.forEach((award) => {
            count += award.values.length;
        });
        return count
    }, [awards])

    const PopupPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const portalRoot = typeof window !== 'undefined' ? document.body : null;
        return portalRoot ? createPortal(children, portalRoot) : null;
    }

    return (
        <div id="card" onClick={() => setIsFlipped(!isFlipped)} ref={cardRef} className={`${cardDims.card} m-1.5 select-none`}>
            < ElementAnimation animation='shine' >
                {/* inner lightening */}
                < div className={`absolute ${cardDims.inner} z-0 rounded-md p-2`}>
                    <div className={`min-w-full min-h-full z-0 absolute rounded-md bg-white opacity-50`}></div>
                </div >

                {/* main content of card */}
                < div id="content" className={`min-w-full min-h-full shadow-md flex rounded-lg p-2`} style={{ backgroundColor: bgColor, color: txtColor }}>
                    <div className={`flex-co min-w-full min-h-full rounded-md justify-center items-centerflex  p-2`} style={{ backgroundColor: bgColor }}>
                        {/* upper half of card */}
                        < div className={`flex flex-col w-full max-h-40 min-h-40 relative z-10`}>
                            {/* top row */}
                            < div className={`min-h-8 max-h-8 flex flex-row`}>
                                {/* project title */}
                                < div id="title" className={`flex-[4] font-bold`}>
                                    {title}
                                </div >
                                {/* awards */}
                                < div id="awards" className={`flex-[1] text-end`}>
                                    {awardCount}
                                </div >
                            </div >
                            {/* visual/demo */}
                            < div className={`flex flex-col justify-items-center min-h-32 max-h-32 rounded-xs`} style={{ backgroundColor: bgColor, color: txtColor }}>
                                <div id="demoFrame" className={`overflow-hidden rounded-sm m-1 flex justify-center items-center min-h-full`}> {/* frame */}
                                    <img src={image} alt="demo cover/image" className={`max-h-full min-h-full`} />
                                </div>
                            </div >
                        </div >

                        {/* lower half of card */}
                        < div className={`flex-col w-full min-h-50 max-h-50 relative z-10`}>
                            {/* upper section */}
                            < div className={`flex-col min-h-42 max-h-42 items-center flex`}>
                                {/* description */}
                                < div className={`w-full min-h-22 overflow-hidden text-ellipsis text-sm 
                                pt-2 text-center`}>
                                    {description}
                                </div >
                                {/* technologies */}
                                {/* TODO: Handle more than 3 items showing without messing with other apperances */}
                                <div id="technologies" className={`flex flex-row flex-wrap w-full justify-center items-center min-h-22 overflow-hidden text-sm`}>
                                    {technologies.map((tech, index) => (
                                        <div key={index} className={`flex pb-1 pt-1`}>
                                            <Tag label={tech} />
                                        </div>
                                    ))}
                                </div>
                            </div >

                            {/* bottom row */}
                            < div className={` min-h-8 max-h-8 flex flex-row`}>
                                {/* challenges */}
                                {/* < div className={`flex-[2] flex items-end`}>
                                {challenges.map((challenge, index) => (
                                    <div key={index} className={`flex pb-1 pt-1`}>
                                        <p>{challenge}</p>
                                    </div>
                                ))}
                            </div > */}
                                {/* pride */}
                                {/* < div className={`flex-[1] flex items-end justify-end`}>
                                Pride
                            </div > */}
                            </div >
                        </div >
                    </div >
                </div >

                {/* detailed card that pops up when card selected */}
                {isFlipped && (
                    <PopupPortal>
                        <div id="cardDetailed" className={`fixed inset-0 **:overflow-hidden flex z-50 justify-center items-center`}>
                            {/* card */}
                            <div className={`relative min-w-[75%] min-h-[75%] max-w-[75%] max-h-[75%] rounded-md shadow-lg`} style={{ backgroundColor: bgColor, color: txtColor }}>
                                {/* inside border */}
                                <div className={`absolute z-0 flex flex-col inset-2 rounded-md bg-white p-2 opacity-50`}>
                                </div>

                                <div id="content" className={`absolute z-1 inset-4 `}>
                                    <div id="upper" className={`flex items-center min-w-full max-w-full min-h-[10%]`}>
                                        <p id="title" className={`text-2xl font-bold min-w-full`}>{title}</p>
                                    </div>
                                    <div id="lower" className={`flex flex-row min-h-[90%] min-w-full`}>
                                        <div id="visuals" className={`bg-white flex min-w-[50%] justify-center items-center overflow-hidden`}>
                                            <img src={image} alt="demo cover/image" className={``} />
                                        </div>
                                        <div id="text" className={`inline-block min-w-[50%] *:max-h-[33%]`}>

                                            {awards.length > 0 && (
                                                <div id="awards" className={`text-lg`}>
                                                    <p className={`font-bold`}>Awards</p>
                                                    {
                                                        awards.map((award, index) => (
                                                            <div key={index}>
                                                                {award.values.map((value, index) => (
                                                                    <div key={index} className={`flex flex-row`}>
                                                                        <div className={`flex-[1]`}>{award.key}</div>
                                                                        <div className={`flex-[2]`}>{value}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )}

                                            <div id="description">
                                                <p className={`font-bold`}>What's this about?</p>
                                                <p>{description}</p>
                                            </div>
                                            <div id="technologies">
                                                <p className={`font-bold`}>What technologies were used?</p>
                                                <div className={`flex flex-row flex-wrap w-full justify-center items-center min-h-22 overflow-hidden text-sm`}>
                                                    {technologies.map((tech, index) => (
                                                        <div key={index} className={`p-1`}>
                                                            <Tag label={tech} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div id="personalNotes">
                                                <p className={`font-bold`}>Personal notes</p>
                                                {/* TODO: update projects. json */}
                                                <p>Lorem ipsum put this in projects.json</p>
                                            </div>
                                            <div id="additionalLinks">
                                                <p className={`font-bold`}>Want to see more?</p>
                                                <p className={`hover:cursor-pointer`}>links</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopupPortal>
                )}
            </ElementAnimation >
        </div >
    );
};
