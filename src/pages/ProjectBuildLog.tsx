import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import type { Project } from '../types/project';
import projectData from '../data/projects.json';
import { ProjectBuildLogPage } from '../stories/pages/ProjectBuildLogPage';
import { setMeta } from '../stories/helpers/routing';

export default function Project() {
    const { slug } = useParams();
    const project: Project | undefined = projectData.find(p => p.title.replace(/\s+/g, '-') === slug);
    // setting up meta tag only on mount
    useEffect(() => {
        setMeta(project?.title ?? 'Project', `The details surrounding this project.`)
    }, [])

    if (!project) {
        return <div className="text-white">Project not found</div>;
    }

    return (
        <div
            data-id="project-page"
            className="animate-fade-in animation-delay-300 bg-linear-30 from-[#468186]/10 to-blue-500/10 text-white"
        >
            <ProjectBuildLogPage project={project} />
        </div >
    )
}