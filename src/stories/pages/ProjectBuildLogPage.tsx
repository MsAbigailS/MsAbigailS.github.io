
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { BuildLogList } from '../lists/BuildLogList';
import { BackgroundShapes } from '../backgrounds/BackgroundShapes';
import { ConstructionNotice } from '../ui/ConstructionNotice';
export interface ProjectBuildLogPageProps {
    project: Project;
    color?: string;
}

export const ProjectBuildLogPage = ({
    project,
    color
}: ProjectBuildLogPageProps) => {
    const dataId = 'project-page';

    const navigate = useNavigate()
    const goToProject = () => {
        navigate(`/projects/${project.title.replace(/\s+/g, '-')}`)
    }

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

            <Header left='Home' right={<div onClick={goToProject}>Close</div>} />

            <div>
                {project.buildLog && project.buildLog.length > 0 ? (
                    <div>
                        <BuildLogList log={project.buildLog} />
                    </div>
                ) : null}
            </div>
        </div>
    );
};
