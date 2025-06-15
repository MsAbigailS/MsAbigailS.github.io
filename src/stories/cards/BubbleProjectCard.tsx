import { Children, useMemo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { complementaryColor, hexToRgba, rgbaToHex, colorsPicker } from '../helpers/colors';
import { BubbleCard } from '../cards/BubbleCard';
import type { Project } from '../../types/project';
import projectData from '../../data/projects.json';
import { TagCard } from './TagCard';
import { Tag } from '../ui/Tag';
import { mapSvgIcon } from '../../utils/maps/svgMap';
import { SVG } from '../ui/SVG'

export interface BubbleProjectCardProps {
    color?: string;
    project: Project
}

export const BubbleProjectCard = ({
    color,
    project
}: BubbleProjectCardProps) => {

    const [tagColors, setTagColors] = useState<string[]>([])
    const [trimmedDescription, setTrimmedDescription] = useState<string>('')

    const navigate = useNavigate()

    // getting non-repeating colors for tags
    useEffect(() => {
        let colors = colorsPicker(project.technologies.length)
        colors.forEach((color, index) => {
            colors[index] = `bg-[${color.substring(1, color.length - 1)}]`
        })
        setTagColors(colors)
    }, [])


    return (
        <BubbleCard
            shadowSize='sm'
        >
            <div
                className="flex flex-col justify-between h-full "
            >
                <div
                    className="*:mb-5"
                >
                    <p
                        className="text-2xl lg:text-4xl font-manrope font-bold"
                    >
                        {project.title}
                    </p>

                    <p>
                        {project.summary}
                    </p>

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
                </div>



                <button
                    onClick={() => navigate(`/projects/${project.title.replace(/\s+/g, '-')}`)}
                    className="w-full rounded-full
                        flex justify-end items-center
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
    );
};
