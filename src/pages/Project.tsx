import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import type { Project } from '../types/project';
import projectData from '../data/projects.json';
import { ProjectPage } from '../stories/ui/ProjectPage';

export default function Project() {
    const { slug } = useParams();
    const project: Project | undefined = projectData.find(p => p.title.replace(/\s+/g, '-') === slug);
    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Project Details"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Project Details')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Project Details'
            document.head.appendChild(meta)
        }
    }, [])
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