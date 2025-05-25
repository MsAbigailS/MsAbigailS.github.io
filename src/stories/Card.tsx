import { useMemo, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ElementAnimation } from './ElementAnimation';
import { Tag } from './Tag';
import { ImageCarousel } from './ImageCarousel';
import { Popup } from './Popup';
// < !--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->

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
    /** What cover image and description to inclue */
    image: { resource: string; alt: string }[];
    /** What video to include */
    video?: string;
    /** What complexity to show */
    complexity?: string;
    /** What challenges to show */
    challenges?: string[];
    /** What awards to show (array of key-value pairs) */
    awards?: { key: string; values: string[] }[];
    /** What personal notes to include */
    personalNotes?: string;
    /** What additional links to include */
    links?: { name: string; url: string }[];
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
    personalNotes,
    links = []
}: CardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [activeSlide, setActiveSlide] = useState({ x: '', y: '' }); // amount needed to move
    const imageMap = import.meta.glob('../assets/*.{jpg,png,jpeg}', {
        eager: true,
        import: 'default',
    });
    const cardRef = useRef<HTMLDivElement>(null);
    // card dimensions
    const cardDims = {
        card: 'min-h-98 max-h-98 min-w-75 max-w-75',
        inner: 'min-h-94 max-h-94 min-w-71 max-w-71'
    }

    // checking screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

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

    // limiting descriptions on preview
    useEffect(() => {
        if (!cardRef.current) return
        const maxChars = 120
        let descriptionDecon = description.substring(0, maxChars).split(' ').slice(0, -1).join(' ')
        const specialChars = ['.', ',', '!', '?', ':', ';']
        if (specialChars.includes(descriptionDecon.slice(-1))) {
            descriptionDecon = descriptionDecon.substring(0, descriptionDecon.length - 1)
        }
        cardRef.current.querySelector('#description')!.textContent = descriptionDecon + '...'
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
        const [mounted, setMounted] = useState(false);
        const [visible, setVisible] = useState(false);
        const portalRoot = typeof window !== 'undefined' ? document.body : null;
        return portalRoot ? createPortal(children, portalRoot) : null;
    }


    return (
        <div id="card" ref={cardRef} className={`${cardDims.card} m-1.5 select-none`}>
            <div onClick={() => setIsFlipped(!isFlipped)}>
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
                                        {awardCount > 0 ?
                                            <div className={`flex justify-end items-center overflow-hidden`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={`size-7`}>
                                                    <path fill="#010102" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
                                                </svg>
                                            </div>
                                            :
                                            ''
                                        }
                                    </div >
                                </div >
                                {/* visual/demo */}
                                < div className={`flex flex-col justify-items-center min-h-32 max-h-32 rounded-xs`} style={{ backgroundColor: bgColor, color: txtColor }}>
                                    <div id="demoFrame" className={`overflow-hidden rounded-sm m-1 flex justify-center items-center min-h-full`}> {/* frame */}
                                        <img src={imageMap[`../assets/${image[0].resource}`] as string} alt="demo cover/image" className={`max-h-full min-h-full`} />
                                    </div>
                                </div >
                            </div >

                            {/* lower half of card */}
                            < div className={`flex-col w-full min-h-50 max-h-50 relative z-10`}>
                                {/* upper section */}
                                < div className={`flex-col min-h-42 max-h-42 items-center flex`}>
                                    {/* description */}
                                    <div id="description"
                                        className={`w-full min-h-26 max-h-26 pt-2 text-center overflow-hidden text-sm`}
                                    >
                                        {description}
                                    </div>
                                    {/* technologies */}
                                    {/* TODO: Handle more than 3 items showing without messing with other apperances */}
                                    <div id="technologies" className={`flex flex-row flex-wrap w-full justify-center items-center min-h-18 max-h-18 overflow-hidden text-sm`}>
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
                </ElementAnimation >
            </div>

            {/* {isFlipped && (
                <Popup />
            )} */}







            {/* detailed card that pops up when card selected */}
            {isFlipped && !isMobile && (

                <PopupPortal>
                    <div className={``}>
                        <div id="cardDetailed" className={`fixed inset-0 **:overflow-hidden flex z-50 justify-center items-center`}>
                            {/* card */}
                            <div className={`relative min-w-[75%] min-h-[75%] max-w-[75%] max-h-[75%] rounded-md shadow-lg`} style={{ backgroundColor: bgColor, color: txtColor }}>
                                {/* inside border */}
                                <div className={`absolute z-0 flex flex-col inset-2 rounded-md bg-white p-2 opacity-50`}>
                                </div>

                                <div id="content" className={`absolute z-1 inset-4`}>
                                    <p id="disclaimer" className={`text-center text-sm`}>
                                        This section is currently under construction, but feel free to checkout the progress I've made!
                                    </p>
                                    {/* closing card */}
                                    <div id="upper" className={`flex items-center min-w-full max-w-full max-h-[5%] min-h-[5%]`}>
                                        <div id="close" className={`flex justify-end items-center min-w-[100%] min-h-[100%]`}>
                                            <p onClick={() => setIsFlipped(!isFlipped)} className={`mr-2 text-xl text-gray-500 hover:text-gray-700 hover:cursor-pointer`}>
                                                x
                                            </p>
                                        </div>
                                    </div>

                                    {/* main content */}
                                    <div id="lower" className={`flex flex-row items-center max-h-[95%] min-h-[95%]`}>
                                        {image ?
                                            <ImageCarousel images={image} /> :
                                            ''
                                        }
                                        <div id="text" className={`inline-block p-2 min-w-[50%] *:max-h-[33%] *:pt-2 *:pb-2`}>
                                            <p id="title" className={`text-2xl underline font-bold min-w-[90%] max-w-[90%]`}>{title}</p>
                                            {awards.length > 0 && (
                                                <div id="awards" className={``}>
                                                    <p className={`font-bold text-lg`}>Awards</p>
                                                    {
                                                        awards.map((award, index) => (
                                                            <div key={index}>
                                                                {award.values.map((value, index) => (
                                                                    <div key={index} className={`flex flex-row`}>
                                                                        <div className={`flex-[1] text-sm`}>{award.key} - {value}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )}

                                            <div id="description">
                                                <p className={`font-bold text-lg`}>What's this about?</p>
                                                <p className={`text-sm`}>{description}</p>
                                            </div>
                                            <div id="technologies">
                                                <p className={`font-bold text-lg`}>What technologies were used?</p>
                                                <div className={`flex flex-row flex-wrap w-full justify-center items-center min-h-15 overflow-hidden text-sm`}>
                                                    {technologies.map((tech, index) => (
                                                        <div key={index} className={`-p-2`}>
                                                            <Tag label={tech} size="small" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div id="personalNotes">
                                                <p className={`font-bold text-lg`}>Personal notes</p>
                                                <p className={`text-sm`}>{personalNotes}</p>
                                            </div>
                                            <div id="additionalLinks">
                                                <p className={`font-bold text-lg`}>Want to see more?</p>
                                                <div className={`hover:cursor-pointer`}>
                                                    {links.map((link, index) => (
                                                        <div key={index} className={`flex flex-row`}>
                                                            <a href={link.url} target="_blank" className={`text-sm text-blue-800 hover:bold`}>{link.name}</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PopupPortal >

            )
            }

            {/* detailed card that pops up when card selected */}
            {isFlipped && isMobile && false && (
                <PopupPortal>
                    <div id="mobileCard" className={`fixed inset-0 overflow-scroll-y flex z-50 justify-center items-center`} >
                        <div id="cardDetailed" className={`fixed inset-0 flex z-50 justify-center items-center`}>
                            {/* card */}
                            <div className={`relative min-w-[90%] min-h-[90%] max-w-[90%] max-h-[90%] rounded-md shadow-lg`} style={{ backgroundColor: bgColor, color: txtColor }}>
                                {/* inside border */}
                                <div className={`absolute z-0 flex flex-col inset-2 rounded-md bg-white p-2 opacity-50`}>
                                </div>


                                {/* content */}
                                <div id="content" className="absolute z-1 inset-4 overflow-auto max-h-[100%]">
                                    <div id="upper" className={`flex flex-row max-h-[10%]`}>
                                        <p id="disclaimer" className={`text-center text-sm`}>
                                            This section is currently under construction, but feel free to checkout the progress I've made!
                                        </p>

                                        <div id="close" className={`flex justify-end items-center min-w-[10%]`}>
                                            <p onClick={() => setIsFlipped(!isFlipped)} className={`mr-2 text-xl`}>
                                                x
                                            </p>
                                        </div>
                                    </div>

                                    <div id="lower" className={`max-h-[90%] flex flex-col items-center`}>
                                        <p id="title" className={`text-2xl underline font-bold min-w-[100%] max-w-[100%]`}>{title}</p>
                                        <div id="visuals" className={`flex justify-center items-center overflow-hidden rounded-sm`}>
                                            {image ?
                                                <ImageCarousel images={image} size="small" /> :
                                                ''
                                            }
                                        </div>
                                        <div id="description">
                                            <p className={`font-bold text-lg`}>What's this about?</p>
                                            <p className={`text-sm`}>{description}</p>
                                        </div>
                                        <div id="technologies">
                                            <div className={`flex flex-row flex-wrap w-full justify-center items-center min-h-15 overflow-hidden text-sm`}>
                                                {technologies.map((tech, index) => (
                                                    <div key={index} className={`-p-2`}>
                                                        <Tag label={tech} size="small" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div id="personalNotes">
                                            <p className={`font-bold text-lg`}>Personal notes</p>
                                            <p className={`text-sm`}>{personalNotes}</p>
                                        </div>
                                        <div id="additionalLinks">
                                            <p className={`font-bold text-lg`}>Want to see more?</p>
                                            <div className={`hover:cursor-pointer`}>
                                                {links.map((link, index) => (
                                                    <div key={index} className={`flex flex-row`}>
                                                        <a href={link.url} target="_blank" className={`text-sm text-blue-800 hover:bold`}>{link.name}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </PopupPortal>
            )
            }

        </div >
    );
};
