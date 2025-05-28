
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { ProjectCardExpanded } from '../cards/ProjectCardExpanded';
import { BackgroundShapes } from '../backgrounds/BackgroundShapes';

export interface ProjectPageProps {
    project: Project;
}

export const ProjectPage = ({
    project
}: ProjectPageProps) => {
    const dataId = 'project-page';

    const navigate = useNavigate()
    const goToProjects = () => {
        navigate(`/projects`)
    }

    const subheader = `text-lg font-semibold`;

    return (
        <div
            data-id={dataId}
            className={`text-white p-6 `}
        >

            <BackgroundShapes shapes={['circle']} density='low' />

            <Header left={<span onClick={goToProjects}>Projects</span>} right={<span onClick={goToProjects}>Close</span>} />

            {/* <p className={`border rounded-sm m-10 p-5`}>Heads up! This page is under construction, feel free to checkout the current progress.</p> */}

            {/* <div data-id="subject-header">
                Explore my project
            </div> */}

            {/* <ProjectCardExpanded project={project} /> */}


        </div>
    );
};
