import { useEffect, useRef, useState } from 'react'
import { TagCard } from '../cards/TagCard'
export interface PileProps {
}

export const Pile = ({
}: PileProps) => {
    // dark: text - white

    const pile = useRef<HTMLDivElement | null>(null)


    function useHeroHalfScrolled(ref: React.RefObject<HTMLElement | null>) {
        const [isPastHalf, setIsPastHalf] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (!ref.current) return;

                const rect = ref.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                const hasScrolledPastHalf = rect.bottom < viewportHeight / 3;
                setIsPastHalf(!hasScrolledPastHalf);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // run on mount

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [ref]);

        return isPastHalf;
    }

    let visible = useHeroHalfScrolled(pile)

    return (
        <div
            ref={pile}
            className={`relative flex justify-center items-center
                pointer-events-none z-1000
                *:absolute
                *:transition-all *:delay-200 *:duration-1000 *:ease-in-out
            `}
        >
            <div
                className={`-rotate-z-2 z-10
                    ${visible ? '-rotate-z-2 opacity-100' : '-translate-y-500 rotate-z-40 opacity-0'}
                    `}
            >
                <TagCard
                    text="websites"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" />
                    </svg>)}
                    color="bg-[#D6E4FF]"
                />
            </div>
            <div
                className={`z-9
                    ${visible ? 'rotate-z-10 translate-x-18 md:translate-x-38 translate-y-6 opacity-100' : 'translate-x-500 -translate-y-500 rotate-z-90 opacity-0'}
                    `}
            >
                <TagCard
                    text="full-stack"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.99999 10.8571 12 13.1428m-4.00001-2.2857L4 13.1428m3.99999-2.2857.00004-4.57139M12 13.1428v4.5715m0-4.5715-4.00001 2.2857M12 13.1428l4-2.2857m-4 2.2857V8.57143m0 4.57137 4 2.2858m-4 2.2857L7.99999 20M12 17.7143 16 20m-8.00001 0L4 17.7143v-4.5715M7.99999 20v-4.5715M4 13.1428l3.99999 2.2857M16 6.28571 12 4 8.00003 6.28571m7.99997 0v4.57139m0-4.57139-4 2.28572m4 2.28567 4 2.2858M8.00003 6.28571 12 8.57143m8 4.57147v4.5714L16 20m4-6.8571-4 2.2857M16 20v-4.5714" />
                    </svg>)}
                    color="bg-[#FDDED8]"
                />
            </div>
            <div
                className={`z-8
                    ${visible ? '-rotate-z-12 -translate-x-18 md:-translate-x-38 -translate-y-6 opacity-100' : '-translate-x-500 -translate-y-500 -rotate-z-80 opacity-0'}
                    `}
            >
                <TagCard
                    text="innovation"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                    </svg>)}
                    color="bg-[#F4E1E4]"
                />
            </div>
            <div
                className={`z-7
                    ${visible ? 'rotate-z-5 -translate-x-4 md:-translate-x-19 translate-y-8 opacity-100' : '-translate-x-500 -translate-y-500 -rotate-z-90 opacity-0'}
                `}>
                <TagCard
                    text="functionality"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
                    </svg>)}
                    color="bg-[#EBDEF8]"
                />
            </div>
            <div
                className={`z-7
                        ${visible ? '-rotate-z-28 translate-x-10 md:translate-x-19 -translate-y-8 md:-translate-y-10 opacity-100' : 'translate-x-500 -translate-y-500 -rotate-z-40 opacity-0'}
                    `}
            >
                <TagCard
                    text="OOP"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
                    </svg>
                    )}
                    color="bg-[#EFFBF1]"
                />
            </div>
            <div
                className={`z-6
                    ${visible ? '-rotate-z-12  -translate-x-12 md:-translate-x-25 translate-y-15 opacity-70' : '-translate-x-500 -translate-y-500 -rotate-z-15 opacity-0'}`}
            >
                <TagCard
                    text="scalability"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
                    </svg>
                    )}
                    color="bg-[#F4E1E4]"
                />
            </div>
            <div
                className={`z-5
                    ${visible ? 'translate-x-19 -translate-y-10 rotate-z-20 opacity-70' : 'translate-x-500 -translate-y-500 rotate-z-40 opacity-0'}`}
            >
                <TagCard
                    text="optimization"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
                    </svg>
                    )}
                    color="bg-[#D6E4FF]"
                />
            </div>

            {/* <div
                className={`z-4
                    ${visible ? '-translate-x-19 -translate-y-20 -rotate-z-5 opacity-20' : 'translate-x-500 -translate-y-500 rotate-z-40 opacity-0'}`}
            >
                <TagCard
                    text="problem solving"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                    </svg>
                    )}
                    color="bg-[#EBDEF8]"
                />
            </div> */}

            {/* <div
                className={`z-4
                    ${visible ? '-translate-x-0 translate-y-20 rotate-z-5 opacity-20' : 'translate-x-500 -translate-y-500 rotate-z-40 opacity-0'}`}
            >
                <TagCard
                    text="creativity"
                    svg={(<svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                    </svg>
                    )}
                    color="bg-[#D6E4FF]"
                />
            </div> */}
        </div >
    );
};
