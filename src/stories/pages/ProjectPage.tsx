
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { ProjectCardExpanded } from '../cards/ProjectCardExpanded';
import { BackgroundShapes } from '../backgrounds/BackgroundShapes';
import { ConstructionNotice } from '../ui/ConstructionNotice';
import { StickyHeader } from '../headers/StickyHeader'
export interface ProjectPageProps {
    project: Project;
    color?: string; // ideally this would be color of card on project page
}

export const ProjectPage = ({
    project,
    color
}: ProjectPageProps) => {
    const dataId = 'project-page';

    const subheader = `text-lg font-semibold`;

    let backgroundDensity: 'low' | 'medium' | 'high';
    let size: 'small' | 'medium' | 'large' = 'large';

    if (window.innerWidth < 768) {
        size = 'medium';
        backgroundDensity = 'high';
    } else if (window.innerWidth < 1024) {
        backgroundDensity = 'medium';
        size = 'medium';
    } else {
        size = 'large';
        backgroundDensity = 'high';
    }

    return (
        <div
            data-id={dataId}
            className={`text-white h-[100%] min-h-screen bg-linear-to-t from-[#BF8B85]/20 to-transparent`}
        >


            <div className="opacity-20">
                <BackgroundShapes
                    shapes={['circle']}
                    density={backgroundDensity}
                    sizes={[size]}
                />
            </div>

            <div className={`p-6 mt-30`}>
                <ProjectCardExpanded project={project} color={color} />
            </div>

        </div>
    );
};
