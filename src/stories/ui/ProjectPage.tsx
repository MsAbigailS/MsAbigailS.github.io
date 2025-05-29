
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { ProjectCardExpanded } from '../cards/ProjectCardExpanded';
import { BackgroundShapes } from '../backgrounds/BackgroundShapes';

export interface ProjectPageProps {
    project: Project;
    color?: string; // ideally this would be color of card on project page
}

export const ProjectPage = ({
    project,
    color
}: ProjectPageProps) => {
    const dataId = 'project-page';

    const navigate = useNavigate()
    const goToProjects = () => {
        navigate(`/projects`)
    }

    const subheader = `text-lg font-semibold`;

    let backgroundDensity: 'low' | 'medium' | 'high';
    let size: 'small' | 'medium' | 'large' = 'large';

    if (window.innerWidth < 768) {
        size = 'medium';
        backgroundDensity = 'medium';
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
            className={`text-white overflow-hidden`}
        >
            {/* <p className={`border rounded-sm m-10 p-5`}>Heads up! This page is under construction, feel free to checkout the current progress.</p> */}

            <div className="opacity-20">
                <BackgroundShapes
                    shapes={['circle']}
                    density={backgroundDensity}
                    sizes={[size]}
                />
            </div>

            <Header left={<span onClick={goToProjects}>Projects</span>} right={<span onClick={goToProjects}>Close</span>} />

            <div className={`p-6`}>
                <ProjectCardExpanded project={project} color={color} />
            </div>

        </div>
    );
};
