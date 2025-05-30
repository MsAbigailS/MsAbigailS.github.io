
import { List } from '../ui/List';
import { ProjectCard } from '../cards/ProjectCard';

import type { Project } from '../../types/project';

import projectData from '../../data/projects.json';

export interface ProjectListProps {
    // children: React.ReactNode;
    projects?: Project[];
}

export const ProjectList = (
    {
        // children,
        projects = projectData
    }: ProjectListProps) => {

    return (
        <List>
            <div
                data-id="project-list"
                className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6 p-12`}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </List>
    );
};
