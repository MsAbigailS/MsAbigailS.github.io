import { useRef } from 'react'
import { useVisible } from '../../hooks/useVisible'

export interface TextAnimationProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What text to include */
    text: string;
    /** What size should the text be */
    size?: 'small' | 'medium' | 'large' | string;
    /** Which animation to use */
    animation?: 'hoverSlide' | 'appearSlide'
}

export const TextAnimation = ({
    text = 'default text',
    size = 'medium',
    animation = 'hoverSlide',
}: TextAnimationProps) => {

    // visibility control for animations
    const animatedText = useRef<HTMLDivElement | null>(null)
    const isVisible = useVisible(animatedText)

    return (
        <div className={`inline-block`}>
            <div
                ref={animatedText}
                className={`relative rounded-xs overflow-hidden flex 
                    flex-col justify-center items-center group
                    ${size === 'small' ? 'text-sm' : size === 'medium' ?
                        'text-md' : size === 'large' ? 'text-lg' : size}`}
            >
                {/* background color movement */}
                <div
                    className={`min-h-full translate-z-0 flex-grow 
                        justify-center items-center flex 
                        text-white rounded-sm
                        bg-gradient-to-r from-white to-white
                        translate-x-[-102%]
                        transition-all
                        ml-1 mr-1 pl-2 pr-2
                        ${animation === 'hoverSlide' ? 'group-hover:translate-x-[0%] p-2' : ''}
                        ${animation === 'appearSlide' && isVisible ? 'translate-x-[0%]' : 'translate-x-[-102%]'}
                        duration-[700ms] ease-in-out
                        text-center`}
                >
                    {text}
                </div>

                {/* text that shows */}
                <div
                    className={`absolute mix-blend-difference 
                        duration-[700ms] ease-in-out text-center border-red-500`}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};
