import { Tag } from './Tag';

export interface CardProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What theme to use */
    theme?: 'pink' | 'white' | 'blue' | 'green' | 'orange'
    // /** What background color to use */
    // // backgroundColor?: string;
    // /** What text color to use */
    // // textColor?: string;
    /** What title to include */
    title?: string;
    /** What description to show */
    description?: string;
    /** What technologies were used */
    technologies?: string[];
    /** When was the project completed */
    completed?: Date;
}

export const Card = ({
    primary = false,
    theme,
    // backgroundColor = "#ffffff",
    // textColor = '#010102',
    description,
    technologies = [],
    completed,
    title,
}: CardProps) => {
    const colors = ['blue', 'green', 'orange', 'pink']
    let bgColor = 'white'
    let txtColor = getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    if (theme === undefined) {
        bgColor = colors[Math.floor(Math.random() * colors.length)]
        bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + bgColor).replace(/"/g, '')
    } else {
        bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
    }
    return (
        // (0.72 ratio @ 120-w)
        // inspired by Pokemon cards
        // IDEA: Evo cards showcase connected projects

        <div id="card" className={`min-w-75 min-h-98 max-w-75 max-h-98 relative m-1.5`}>
            {/* shine animation over card */}
            <div id="cover"
                className=
                {`z-20 min-w-full min-h-full absolute bg-no-repeat 
                    bg-[linear-gradient(45deg,transparent_25%,rgba(65,65,65,.2)_70%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] 
                    transition-[background-position_0s_ease] bg-[position:-100%_0,0_0] hover:bg-[position:150%_0,0_0] hover:duration-[1000ms]
                    mix-blend-color-dodge`}
            >
            </div>

            <div className={`absolute min-w-71 min-h-94 z-0 rounded-md p-2`}>
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
                            {/* complexity */}
                            < div id="category" className={`flex-[1] text-end`}>
                                cmplxity
                            </div >
                        </div >
                        {/* visual/demo */}
                        < div className={`flex flex-col justify-items-center min-h-32 max-h-32 border-1 rounded-xs`}>
                            <div id="demoFrame" className={`border-1 rounded-sm flex-[1] m-1 text-center flex`}> {/* frame */}
                                <div className={`m-1 flex-[1] flex justify-center items-center`}>
                                    visual/demo
                                </div>
                            </div>
                        </div >
                    </div >

                    {/* lower half of card */}
                    < div className={`flex flex-col w-full min-h-50 max-h-50 relative z-10`}>
                        {/* upper section */}
                        < div className={`flex-col min-h-42 max-h-42 items-center flex`}>
                            {/* description */}
                            < div className={`w-full flex-[2] min-w-0 overflow-hidden text-ellipsis text-sm pt-2`}>
                                {description}
                            </div >
                            {/* technologies */}
                            {/* TODO: Handle more than 3 items showing without messing with other apperances */}
                            <div className={`w-full flex-[1] flex flex-col text-sm`}>
                                {technologies.map((tech, index) => (
                                    <div key={index} className={`flex-[1] flex items-center`}>
                                        <Tag label={tech} />
                                    </div>

                                ))}
                            </div>
                        </div >
                        {/* bottom row */}
                        < div className={` min-h-8 max-h-8 flex flex-row`}>
                            {/* challenges */}
                            < div className={`flex-[2] flex items-end`}>
                                Challenges
                            </div >
                            {/* pride */}
                            < div className={`flex-[1] flex items-end justify-end`}>
                                Pride
                            </div >
                        </div >
                    </div >
                </div >
            </div>
        </div>
    );
};
