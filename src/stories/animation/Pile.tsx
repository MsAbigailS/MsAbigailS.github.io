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
                    svg="computer"
                    color="bg-[#D6E4FF]"
                    size="xl"
                />
            </div>
            <div
                className={`z-9
                    ${visible ? 'rotate-z-10 translate-x-18 md:translate-x-38 translate-y-6 opacity-100' : 'translate-x-500 -translate-y-500 rotate-z-90 opacity-0'}
                    `}
            >
                <TagCard
                    text="full-stack"
                    svg="fullstack"
                    color="bg-[#FDDED8]"
                    size="xl"
                />
            </div>
            <div
                className={`z-8
                    ${visible ? '-rotate-z-12 -translate-x-18 md:-translate-x-38 -translate-y-6 opacity-100' : '-translate-x-500 -translate-y-500 -rotate-z-80 opacity-0'}
                    `}
            >
                <TagCard
                    text="innovation"
                    svg="lightbuld"
                    color="bg-[#F4E1E4]"
                    size="xl"
                />
            </div>
            <div
                className={`z-7
                    ${visible ? 'rotate-z-5 -translate-x-4 md:-translate-x-19 translate-y-8 opacity-100' : '-translate-x-500 -translate-y-500 -rotate-z-90 opacity-0'}
                `}>
                <TagCard
                    text="functionality"
                    svg="functionality"
                    color="bg-[#EBDEF8]"
                    size="xl"
                />
            </div>
            <div
                className={`z-7
                        ${visible ? '-rotate-z-28 translate-x-10 md:translate-x-19 -translate-y-8 md:-translate-y-10 opacity-100' : 'translate-x-500 -translate-y-500 -rotate-z-40 opacity-0'}
                    `}
            >
                <TagCard
                    text="OOP"
                    svg="OOP"
                    color="bg-[#EFFBF1]"
                    size="xl"
                />
            </div>
            <div
                className={`z-6
                    ${visible ? '-rotate-z-12  -translate-x-12 md:-translate-x-25 translate-y-15 opacity-70' : '-translate-x-500 -translate-y-500 -rotate-z-15 opacity-0'}`}
            >
                <TagCard
                    text="scalability"
                    svg="scalability"
                    color="bg-[#F4E1E4]"
                    size="xl"
                />
            </div>
            <div
                className={`z-5
                    ${visible ? 'translate-x-19 -translate-y-10 rotate-z-20 opacity-70' : 'translate-x-500 -translate-y-500 rotate-z-40 opacity-0'}`}
            >
                <TagCard
                    text="optimization"
                    svg="optimization"
                    color="bg-[#D6E4FF]"
                    size="xl"
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
                    size="xl"
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
                    size="xl"
                />
            </div> */}
        </div >
    );
};
