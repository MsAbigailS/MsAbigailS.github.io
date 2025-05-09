import './card.css';

export interface CardProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** What text color to use */
    textColor?: string;
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
    backgroundColor = "#ffffff",
    textColor = '#010102',
    description,
    technologies = [],
    completed,
    title,
    ...props
}: CardProps) => {
    return (
        // (0.72 ratio @ 120-w)
        // inspired by Pokemon cards
        // IDEA: Evo cards showcase connected projects
        <div className={`rounded-lg justify-center items-center flex flex-col min-w-75 min-h-92 max-w-75 max-h-92 shadow-md p-0.5 m-2`} style={{ backgroundColor, color: textColor }}>
            {/* upper half of card */}
            <div className={`flex flex-col w-full max-h-40 min-h-40`}>
                {/* top row */}
                <div className={`border-amber-500 border-1 min-h-8 max-h-8 flex flex-row`}>
                    {/* project title */}
                    <div id="title" className={`border-1 flex-[4]`}>
                        {title}
                    </div>
                    {/* complexity */}
                    <div id="category" className={`border-pink-500 border-1 flex-[1] text-end`}>
                        cmplxity
                    </div>
                </div>
                {/* visual/demo */}
                <div className={`border-1 border-blue-500 flex flex-col justify-items-center min-h-32 max-h-32`}>
                    <div id="demoFrame" className={`border-1 rounded-sm flex-[1] m-1.5 text-center flex`}> {/* frame */}
                        <div className={`border-1 m-1 flex-[1] flex justify-center items-center`}>
                            visual/demo
                        </div>
                    </div>
                </div>
            </div>

            {/* lower half of card */}
            <div className={`flex flex-col border-1 w-full min-h-50 max-h-50`}>
                {/* upper section */}
                <div className={`flex-col border-amber-500 border-1 min-h-42 max-h-42 items-center flex`}>
                    {/* description */}
                    <div className={`border-1 border-pink-800 w-full flex-[2] min-w-0 overflow-hidden text-ellipsis text-sm`}>
                        {description}
                    </div>
                    {/* technologies */}
                    {/* TODO: Handle more than 3 items showing without messing with other apperances */}
                    <div className={`border-1 border-green-500 w-full flex-[1] flex flex-col text-sm`}>
                        {technologies.map((tech, index) => (
                            <div key={index} className={`border-1 border-green-500 flex-[1]`}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                {/* bottom row */}
                <div className={`border-1 border-blue-500 min-h-8 max-h-8 flex flex-row`}>
                    {/* challenges */}
                    <div className={`border-1 border-amber-400 flex-[2] flex items-end`}>
                        Challenges
                    </div>
                    {/* pride */}
                    <div className={`border-1 border-amber-800 flex-[1] flex items-end justify-end`}>
                        Pride
                    </div>
                </div>
            </div>
        </div>
    );
};
