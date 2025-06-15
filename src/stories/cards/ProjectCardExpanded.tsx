
import { useEffect, useState } from 'react';
import { complementaryColor, hexToRgba, rgbaToHex, colorsPicker } from '../helpers/colors';
import type { Project } from '../../types/project';
import { ProjectBuildLogPage } from '../pages/ProjectBuildLogPage';
import { data, useNavigate } from 'react-router-dom'
import { Card } from '../ui/Card';
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { ImageBanner } from '../images/ImageBanner';
import { brighten } from '../helpers/colors';
import { GlassCard } from './GlassCard';
import { Tag } from '../ui/Tag';
import { ConstructionNotice } from '../ui/ConstructionNotice';
import { ImageCarousel } from '../ui/ImageCarousel';
import { GradientText } from '../text/GradientText';
import { TagCard } from './TagCard';
import { TextAnimation } from '../ui/TextAnimation';
import { SVG } from '../ui/SVG';
import { BubbleCard } from './BubbleCard';

export interface ProjectCardExpandedProps {
    project: Project;
}

export const ProjectCardExpanded = ({
    project
}: ProjectCardExpandedProps) => {
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
        <div>
            <div
                className="*:mt-5 *:mb-5 
                *:w-full
                flex flex-col justify-center items-center
                text-center font-manrope text-md"
            >


                <div id="title">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-5xl md:text-6xl lg:text-8xl"
                    >
                        <GradientText
                            text={project.title}
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>
                </div>

                {/* warning if proj isn't finished */}
                <div
                    id="warning"
                    className={`${project.completed?.toLocaleLowerCase().indexOf("in progress") != -1 ? 'flex' : 'hidden'}`}
                >
                    <TagCard
                        text="Active project."
                        svg="lightbuld"
                        size="md"
                        color="bg-[#FDDED8]"
                    />
                </div>

                <div id="visuals">
                    <ImageCarousel
                        images={project.imgs}
                    />
                </div>

                <div id="overview">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="Overview"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <div
                        id="links"
                        className="w-full flex justify-center *:g-6 items-center mb-10"
                    >
                        {project.links.map((link, index) => {
                            return (
                                <a
                                    href={link.url}
                                    key={index}
                                    className="ml-3 mr-3 text-gray-300 border-b-1 border-gray-300 hover:border-b-1 hover:text-white hover:border-b-white"
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>

                    <div id="content">
                        {project.description}
                    </div>

                    {project.buildLog ?
                        <div className={`font-manrope mt-6 text-3xl flex justify-center items-center ease-in-out transition-opacity duration-1000`}>
                            <div
                                id="callToAction"
                                onClick={() => navigate(`/projects/${project.title.replace(/\s+/g, '-')}/buildlog`)}
                                className={`relative m-2 p-2 border-1 border-white-500 text-white
                                                hover:border-white rounded-lg overflow-hidden flex flex-col
                                                justify-center items-center hover:cursor-pointer`}
                            >
                                <TextAnimation
                                    text="View Buildlog"
                                    animation='hoverSlide'
                                />
                            </div>
                        </div>
                        : null
                    }
                </div>

                <div id="technologies-used">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="Technologies Used"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <div
                        id="tags"
                        className="hidden md:flex flex-wrap justify-center items-center gap-6 w-full"
                    >
                        {project.technologies.map((tech, index) => {
                            return (
                                <div
                                    key={index}
                                >
                                    <TagCard
                                        text={tech}
                                        svg={tech}
                                        color={tagColors[index]}
                                        size="md"
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div
                        id="tags"
                        className="flex flex-col gap-2 mt-10 md:hidden w-full justify-center items-center"
                    >
                        {project.technologies.map((tech, index) => {
                            return (
                                <div
                                    key={index}
                                >
                                    <TagCard
                                        text={tech}
                                        svg={tech}
                                        color={tagColors[index]}
                                        size="lg"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div id="the-problem">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="The Problem"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <div>
                        {project.caseStudy?.problem}
                    </div>
                </div>


                <div id="the-solution">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="The Solution"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    {project.caseStudy?.solution}
                </div>

                <div id="key-features">
                    <div
                        className="w-full flex items-center justify-center
                        text-center md:text-center text-4xl md:text-6xl 
                        h-full
                        mb-5 mt-5"
                    >
                        <GradientText
                            text="Key Features"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <div
                        className="w-full flex flex-col items-center"
                    >
                        <div
                            className="text-start"
                        >
                            {project.caseStudy?.keyFeatures.map((feature, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row justify-start items-center mb-3 mt-3"
                                    >
                                        ✨
                                        {feature}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div id="outcomes">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="Outcomes"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    {project.caseStudy?.outcomes.length === 0 ?
                        <div>
                            Coming soon...
                        </div>
                        :
                        <div
                            className="w-full flex flex-col items-center"
                        >
                            <div
                                className="text-start"
                            >
                                {project.caseStudy?.outcomes.map((outcome, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="mt-3"
                                        >
                                            ✨
                                            {outcome}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }

                </div>

                <div id="challenges-and-lessons">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="Challenges and Lessons"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    {project.caseStudy?.lessons.map((lesson, index) => {
                        return (
                            <div
                                key={index}
                            >
                                {lesson.challenge}
                                {lesson.lesson}
                            </div>
                        )
                    })}
                </div>

                <div id="conclusion">
                    <div
                        className="w-full flex items-center justify-center mt-5 mb-5 text-center md:text-center h-full text-4xl md:text-6xl"
                    >
                        <GradientText
                            text="Conclusion"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <div>
                        {project.caseStudy?.conclusion.length === 0 ?
                            <div>
                                Coming soon...
                            </div>
                            :
                            <div>
                                {project.caseStudy?.conclusion}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};
