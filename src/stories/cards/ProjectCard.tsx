import { useMemo, useState, useRef, useEffect } from 'react';
import { ImageCarousel } from '../ui/ImageCarousel';
import { createPortal } from 'react-dom';
import { ElementAnimation } from '../ui/ElementAnimation';
import { Tag } from '../ui/Tag';
import { Card } from '../ui/Card';
import { TagList } from '../lists/TagList';
import { Image } from '../ui/Image';
import type { Project } from '../../types/project';
import { hexToRgba, lighten } from '../helpers/colors';
import { ProjectPage } from '../ui/ProjectPage';
import { useNavigate } from 'react-router-dom'

export interface ProjectCardProps {
    /** What color theme to use (if unselected, a random theme will be chosen (excluding white))*/
    theme?: 'pink' | 'white' | 'blue' | 'green' | 'orange';
    project: Project;
};

export const ProjectCard = ({
    theme,
    project = {
        title: 'Default Project Title',
        description: 'Default project description.',
        technologies: [],
        completed: null,
        imgs: [],
        challenges: null,
        awards: null,
        personalNotes: '',
        links: []
    }
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const dataId = 'project-card';

    // random select theme if no theme selected
    const colors = ['blue', 'green', 'orange', 'pink', 'red']
    const bgColor = useMemo(() => {
        if (theme === undefined) {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + colors[Math.floor(Math.random() * colors.length)]).replace(/"/g, '')
        } else {
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + theme).replace(/"/g, '')
        }
    }, [])

    // getting text color
    let txtColor = useMemo(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-black').replace(/"/g, '')
    }, [])

    let insideColor = useMemo(() => {
        return lighten(hexToRgba(bgColor, 1));
    }, [])

    const navigate = useNavigate()
    const goToProject = () => {
        navigate(`/projects/${project.title.replace(/\s+/g, '-')}`)
    }

    return (
        <Card>

            <div onClick={goToProject}>
                <ElementAnimation animation={['tilt']}>
                    <ElementAnimation animation={['shine']}>
                        <div
                            data-id={dataId}
                            className={`p-2 rounded-lg flex flex-col justify-center 
                        items-center text-center max-w-[400px]`}
                            style={{ backgroundColor: bgColor, color: txtColor }}
                        >
                            <div
                                className={`rounded-lg p-4 *:pb-2 *:pt-2`}
                                style={{ backgroundColor: insideColor }}>
                                <div
                                    data-id={`${dataId}-header`}
                                    className={`border-b-2 w-full flex flex-row justify-between`}>
                                    <div
                                        data-id={`${dataId}-title`}
                                        className={`text-2xl font-bold w-full text-start`}
                                    >
                                        {project.title}
                                    </div>
                                    {project.awards && project.awards.length > 0 ?
                                        <div
                                            data-id={`${dataId}-award-icon`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={`size-7`}>
                                                <path fill="#010102" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
                                            </svg>
                                        </div>
                                        : null
                                    }

                                </div>
                                <div
                                    data-id={`${dataId}-image`}
                                    className={`flex justify-center items-center min-w-full h-50`}
                                >
                                    <Image image={project.imgs[0]} fit='object-cover' />
                                </div>

                                <div data-id={`${dataId}-description`}>
                                    {project.description}
                                </div>
                                <div data-id={`${dataId}-technologies`}>
                                    <TagList tags={project.technologies} />
                                </div>
                            </div>
                        </div>
                    </ElementAnimation>
                </ElementAnimation>
            </div>
        </Card >
    );
};
