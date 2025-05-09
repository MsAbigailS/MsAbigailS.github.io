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
    theme = "white",
    // backgroundColor = "#ffffff",
    // textColor = '#010102',
    description,
    technologies = [],
    completed,
    title,
}: CardProps) => {
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
    const txtColor = getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    return (
        // (0.72 ratio @ 120-w)
        // inspired by Pokemon cards
        // IDEA: Evo cards showcase connected projects
        <div className={`shadow-md flex rounded-lg p-3 m-1 bg-white`}>
            <div className={`rounded-md justify-center items-center flex flex-col min-w-75 min-h-92 max-w-75 max-h-92 p-1.5`} style={{ backgroundColor: bgColor, color: txtColor }}>
                < div className={`flex flex-col w-full max-h-40 min-h-40`}>
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
                < div className={`flex flex-col w-full min-h-50 max-h-50`}>
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
    );
};
