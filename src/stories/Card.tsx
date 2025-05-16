import { useMemo } from 'react';
import { Tag } from './Tag';

export interface CardProps {
    /** What color theme to use (if unselected, a random theme will be chosen (excluding white))*/
    theme?: 'pink' | 'white' | 'blue' | 'green' | 'orange'
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
    /** What awards to show (grantor, [award]) */
    awards?: { [key: string]: string[] };
}

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
    awards = { ['Grantor']: ['Award1', 'Award2'] },
}: CardProps) => {
    // setting up card dimensions
    let cardDims: { width: number | string; height: number | string; innerWidth: number | string; innerHeight: number | string, border: number | string } = {
        width: 75,
        height: 98,
        innerWidth: 0,
        innerHeight: 0,
        border: 4
    }
    cardDims.innerWidth = Number(cardDims.width) - Number(cardDims.border)
    cardDims.innerHeight = Number(cardDims.height) - Number(cardDims.border)
    cardDims.width = 'min-w-' + cardDims.width + ' ' + 'max-w-' + cardDims.width
    cardDims.height = 'min-h-' + cardDims.height + ' ' + 'max-h-' + cardDims.height
    cardDims.innerWidth = 'min-w-' + cardDims.innerWidth + ' ' + 'max-w-' + cardDims.innerWidth
    cardDims.innerHeight = 'min-h-' + cardDims.innerHeight + ' ' + 'max-h-' + cardDims.innerHeight

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

    return (
        <div id="card" className={`relative ${cardDims.height} ${cardDims.width} m-1.5`}>
            {/* shine animation over card */}
            <div id="cover"
                className={`z-20 min-w-full min-h-full absolute bg-no-repeat 
                    bg-[linear-gradient(45deg,transparent_25%,rgba(65,65,65,.2)_70%,transparent_75%,transparent_100%)] 
                    bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0]
                    transition-[background-position_0s_ease] hover:bg-[position:150%_0,0_0] hover:duration-[1000ms]
                    `}
            >
            </div>

            <div className={`absolute ${cardDims.innerHeight} ${cardDims.innerWidth} z-0 rounded-md p-2`}>
                <div className={`min-w-full min-h-full z-0 absolute rounded-md bg-white opacity-50`}></div>
            </div>


            {/* main content of card */}
            <div id="content" className={`min-w-full min-h-full shadow-md flex rounded-lg p-2`} style={{ backgroundColor: bgColor, color: txtColor }}>
                <div className={`min-w-full min-h-full rounded-md justify-center items-centerflex flex-co p-2`} style={{ backgroundColor: bgColor }}>
                    {/* upper half of card */}
                    < div className={`flex flex-col w-full max-h-40 min-h-40 relative z-10`}>
                        {/* top row */}
                        < div className={`min-h-8 max-h-8 flex flex-row`}>
                            {/* project title */}
                            < div id="title" className={`flex-[4]`}>
                                {title}
                            </div >
                            {/* awards */}
                            < div id="awards" className={`flex-[1] text-end`}>
                                {/* {awards.map((award, index) => (
                                    <div key={index} className={`flex pb-1 pt-1`}>
                                        <p>{award}</p>
                                    </div>
                                ))} */}
                            </div >
                        </div >
                        {/* visual/demo */}
                        < div className={`flex flex-col justify-items-center min-h-32 max-h-32 rounded-xs`} style={{ backgroundColor: bgColor, color: txtColor }}>
                            <div id="demoFrame" className={`overflow-hidden rounded-sm m-1 flex justify-center items-center min-h-full`}> {/* frame */}
                                <img src={url} className={`max-h-full min-h-full`} />
                            </div>
                        </div >
                    </div >

                    {/* lower half of card */}
                    < div className={`flex flex-col w-full min-h-50 max-h-50 relative z-10`}>
                        {/* upper section */}
                        < div className={`flex-col min-h-42 max-h-42 items-center flex`}>
                            {/* description */}
                            < div className={`w-full min-h-22 overflow-hidden text-ellipsis text-sm 
                                pt-2 text-center`}>
                                {description}
                            </div >
                            {/* technologies */}
                            {/* TODO: Handle more than 3 items showing without messing with other apperances */}
                            <div id="technologies" className={`w-full justify-center items-center min-h-22 flex flex-row flex-wrap overflow-hidden text-sm`}>
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
            </div>
        </div>
    );
};
