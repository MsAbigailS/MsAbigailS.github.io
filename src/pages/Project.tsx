import { useParams } from 'react-router-dom';
import type { Project } from '../types/project';
import projectData from '../data/projects.json';
import { ProjectPage } from '../stories/ui/ProjectPage';

export default function Project() {
    const { slug } = useParams();
    const project: Project | undefined = projectData.find(p => p.title.replace(/\s+/g, '-') === slug);

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    return (
        <div
            data-id="project-page"
            className="animate-fade-in animation-delay-300 bg-linear-30 from-[#468186]/10 to-blue-500/10"
        >
            <ProjectPage project={project} color='rgba(191,139,133,0.25)' />
        </div >
    )
}