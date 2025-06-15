import { Children, useMemo, useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { complementaryColor, hexToRgba, rgbaToHex, colorsPicker } from '../helpers/colors';
import { BubbleCard } from '../cards/BubbleCard';
import type { Project } from '../../types/project';
import projectData from '../../data/projects.json';
import { TagCard } from './TagCard';
import { Tag } from '../ui/Tag';
import { SVG } from '../ui/SVG'
import { Image } from '../ui/Image'
import { useVisible } from '../../hooks/useVisible'
import { BubbleProjectCard } from './BubbleProjectCard';
import { mapSvgIcon } from '../../utils/maps/svgMap';

export interface ProjectCardDetailedProps {
    project: Project
    index?: number
}

export const ProjectCardDetailed = ({
    project,
    index = 0
}: ProjectCardDetailedProps) => {

    const [tagColors, setTagColors] = useState<string[]>([])
    const [trimmedDescription, setTrimmedDescription] = useState<string>('')

    const navigate = useNavigate()
    const slugged = `/projects/${project.title.replace(/\s+/g, '-')}`

    // getting non-repeating colors for tags
    useEffect(() => {
        let colors = colorsPicker(project.technologies.length)
        colors.forEach((color, index) => {
            colors[index] = `bg-[${color.substring(1, color.length - 1)}]`
        })
        setTagColors(colors)
    }, [])


    // reducing description length
    useEffect(() => {
        const maxChars = 200
        if (project.description.length > maxChars) {
            setTrimmedDescription(project.description.substring(0, maxChars) + '...')
        }
    }, [])

    const card = useRef<HTMLDivElement | null>(null)
    const lgCard = useRef<HTMLDivElement | null>(null)

    let visible = useVisible(card)
    let lgVisible = useVisible(lgCard)

    return (
        <div>
            {/* large card */}
            <div
                ref={lgCard}
            >
                <div
                    id="large-card"
                    className={`hidden md:flex justify-center
                    h-full w-full
                    ${lgVisible ? 'animate-swing-in' : 'animate-swing-out'}
                `}
                >
                    <BubbleCard
                        shadowSize='md'
                    >
                        <div className="flex justify-center w-full">
                            <div
                                className='flex items-center justify-center gap-6 w-full'
                            >
                                <div
                                    id="details"
                                    className="w-[30%] h-full"
                                >
                                    <BubbleProjectCard
                                        project={project}
                                    />
                                </div>
                                <div
                                    id="image"
                                    className="
                        w-[70%] h-full"
                                >
                                    <BubbleCard
                                        shadowSize='sm'
                                    >
                                        <div
                                            className="h-full w-full
                                    flex justify-center items-center">
                                            <div
                                                className="w-full h-100 
                                    overflow-hidden 
                                    flex justify-center items-center"
                                            >
                                                <Image
                                                    image={project.imgs[0]}
                                                    fit="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </BubbleCard>
                                </div>
                            </div>
                        </div>
                    </BubbleCard>
                </div>
            </div>

            {/* mobile card */}
            <div
                ref={card}
                id="mobile-card"
                className="flex md:hidden w-full"
            >
                <div
                    onClick={() => navigate(slugged)}
                    className={`transition-all duration-500 delay-200 ease-in-out
                        w-full
                        ${visible ?
                            'translate-x-0 rotate-z-0 opacity-100 rounded-4xl'
                            :
                            `${index % 2 == 0 ? 'translate-x-20 rotate-z-20 md:translate-x-0 md:rotate-z-0 opacity-0' : '-translate-x-20 -rotate-z-20 md:translate-x-0 md:rotate-z-0 opacity-0'}`}`}
                >
                    <BubbleCard>
                        <div className="flex mix-blend-color-burn justify-center items-center">
                            <div
                                className="text-3xl md:text-2xl xl:text-3xl font-manrope font-bold text-center 
                            p-2 text-amber-50
                            opacity-100"
                            >
                                {project.title}
                            </div>
                        </div>
                        <div className="w-full h-full rounded-md max-h-70 flex justify-center items-center overflow-hidden">
                            <Image
                                image={project.imgs[0]}
                                fit='object-cover'
                            />
                        </div>
                        <div className="mb-3 mt-3 text-center text-lg">
                            {project.summary}
                        </div>
                        <div className='*:mb-3 *:mt-3'>
                            <div className="flex flex-wrap gap-2 justify-center items-center">
                                {project.technologies.map((tech, index) => {

                                    return (
                                        <div className="*:text-md" key={index}>
                                            <TagCard
                                                text={tech}
                                                svg={tech}
                                                color={tagColors[index]}
                                                size="sm"
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                onClick={() => navigate('/projects/Job-Application-Tracker')}
                                className="hidden md:flex w-full rounded-full 
                                    justify-end items-center
                                    border
                                    hover:cursor-pointer hover:shadow-md hover:shadow-gray-400/40"
                            >
                                <TagCard
                                    text='open project'
                                    svg="arrow"
                                    color='bg-white'
                                    size="md"
                                    flip={true}
                                    position='left'
                                />
                            </button>
                        </div>
                    </BubbleCard >
                </div>
            </div>


        </div >
    );
};
