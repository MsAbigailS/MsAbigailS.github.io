import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import type { Project } from '../types/project';
import projectData from '../data/projects.json';
import { ProjectPage } from '../stories/pages/ProjectPage';
import { setMeta } from '../stories/helpers/routing';
import { StickyHeader } from '../stories/headers/StickyHeader';

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

    const navigate = useNavigate()

    return (
        <div
            data-id="project-page"
            className="animate-fade-in animation-delay-300 bg-linear-30 from-blue-500/10 to-blue-500/10"
        >
            <StickyHeader routes={[
                { text: 'Home', route: '#home', nav: () => navigate('/') },
                { text: 'Projects', route: '#projects', nav: () => navigate('/projects') },
                { text: 'Log', route: '#log', nav: () => navigate('/build-log') }
            ]} />
            <ProjectPage project={project} color='rgba(191,139,133,0.25)' />
        </div >
    )
}