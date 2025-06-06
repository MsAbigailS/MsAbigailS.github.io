
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


export interface ProjectCardExpandedProps {
    project: Project;
    color?: string; // ideally this would be color of card on project page
}

export const ProjectCardExpanded = ({
    project,
    color
}: ProjectCardExpandedProps) => {
    const dataId = 'project-card-expanded';
    let shadow = '';

    if (color) {
        shadow = `shadow-[${color}]`;
        color = `${color}`;
    }

    const navigate = useNavigate()
    const goToProjects = () => {
        navigate(`/projects`)
    }
    const goToProjectBuildLog = () => {
        navigate(`/projects/${project.title.replace(/\s+/g, '-')}/buildlog`)
    }

    const subheader = `font-inknut rounded-md bg-white text-gray-950 border-white border-2 inline-block p-2`;
    const card = `text-white rounded-xl border-white border-2 p-6`

    return (
        <Card>

            <div
                data-id={dataId}
                className="flex flex-col lg:flex-row gap-6 px-4 py-10 font-assistant"
            >
                {/* left */}
                <div data-id={`${dataId}-left`} className="lg:w-1/3 space-y-4 relative">
                    <div
                        data-id={`${dataId}-top`}
                    >
                        <div className="relative">
                            <GlassCard>
                                <h2
                                    data-id={`${dataId}-title`}
                                    className="text-3xl font-bold mb-5 lg:text-start text-center"
                                >
                                    {project.title}
                                </h2>
                                <TagList
                                    tags={project.technologies}
                                />
                                <div
                                    data-id={`${dataId}-links`}
                                    className="pt-2 space-y-1 flex flex-row justify-around mt-5"
                                >
                                    {project.links.map((link, index) => (
                                        <a
                                            href={link.url}
                                            key={index}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-id={`${dataId}-link-${index}`}
                                            className="z-10 underline text-blue-200 
                                            hover:text-blue-300 
                                            hover:cursor-pointer 
                                            self-start
                                            transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </GlassCard>

                            <div
                                data-id={`${dataId}-decoration-shift`}
                                className={`absolute top-1 left-1 w-full h-full opacity-50 pointer-events-none`}
                            >
                                <GlassCard />
                            </div>
                        </div>
                    </div>

                    <div
                        data-id={`${dataId}-upper`}
                    >
                        <div className="relative">
                            <GlassCard>
                                <div
                                    data-id={`${dataId}-description`}
                                    className="text-md m-4 text-center"
                                >
                                    {project.description}
                                </div>
                            </GlassCard>

                            <div
                                data-id={`${dataId}-decoration-shift`}
                                className={`absolute top-1 left-1 w-full h-full opacity-50 pointer-events-none`}
                            >
                                <GlassCard />
                            </div>
                        </div>
                    </div>

                    <div
                        data-id={`${dataId}-lower`}
                    >
                        <div className="relative">
                            <GlassCard>
                                <h2
                                    data-id={`${dataId}-title`}
                                    className="text-2xl font-bold mb-5 lg:text-start text-center"
                                >
                                    Personal Notes
                                </h2>
                                <div
                                    data-id={`${dataId}-description`}
                                    className="text-md m-4 text-center"
                                >
                                    {project.personalNotes}
                                </div>
                            </GlassCard>

                            <div
                                data-id={`${dataId}-decoration-shift`}
                                className={`absolute top-1 left-1 w-full h-full opacity-50 pointer-events-none`}
                            >
                                <GlassCard />
                            </div>
                        </div>
                    </div>

                    {project.buildLog ? (
                        <div
                            data-id={`${dataId}-bottom`}
                        >
                            <div className="relative">
                                <GlassCard>
                                    <div
                                        data-id={`${dataId}-build-log`}
                                        className="pt-2 space-y-1 flex flex-row justify-around"
                                    >
                                        {project.buildLog ? (
                                            <button
                                                data-id={`${dataId}-build-log`}
                                                onClick={goToProjectBuildLog}
                                                className="z-10 border-1 p-5 rounded-md shadow-md 
                                    hover:text-blue-300
                                    ease-in-out duration-300 
                                    hover:cursor-pointer 
                                    self-start
                                    transition-colors"
                                            >
                                                View Build Log
                                            </button>
                                        ) : null}
                                    </div>
                                </GlassCard>

                                <div
                                    data-id={`${dataId}-decoration-shift`}
                                    className={`absolute top-1 left-1 w-full h-full opacity-50 pointer-events-none`}
                                >
                                    <GlassCard />
                                </div>
                            </div>
                        </div>
                    ) : null
                    }


                </div>

                {/* right */}
                <div
                    data-id={`${dataId}-right`}
                    className="lg:w-2/3 space-y-6 relative"
                >
                    <div
                        className="relative"
                    >
                        <GlassCard>
                            <div
                                data-id={`${dataId}-images`}
                                className="z-75 rounded-lg overflow-hidden mb-4 text-center text-gray-200"
                            >
                                <ImageCarousel images={project.imgs} />
                            </div>
                        </GlassCard>


                        <div
                            data-id={`${dataId}-decoration-shift`}
                            className={`absolute top-1 left-1 w-full h-full opacity-50 pointer-events-none`}
                        >
                            <GlassCard />
                        </div>
                    </div>

                </div>
            </div >
        </Card >
    );
};
