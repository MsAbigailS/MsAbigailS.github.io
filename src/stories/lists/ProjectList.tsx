import { useEffect, useState, useRef, useMemo } from 'react'
import { List } from '../ui/List';
import { ProjectCard } from '../cards/ProjectCard';
import { ProjectCardDetailed } from '../cards/ProjectCardDetailed';
import type { Project } from '../../types/project';
import projectData from '../../data/projects.json';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addFilter, removeFilter } from '../../redux/filters/filtersSlice'

export interface ProjectListProps {
    projects: Project[];
}

export const ProjectList = (
    {
        projects
    }: ProjectListProps) => {

    // redux
    const dispatch = useDispatch();
    const activeFilters = useSelector((state: RootState) => state.filters.techStack)

    // getting all technologies
    const allTags = Array.from(
        Array.from(new Set(projects.flatMap(project => project.technologies))).sort()
    )

    // projects that have at least one of selected technologies
    const filteredProjects = useMemo(() => {
        if (activeFilters.length === 0) {
            return projects;
        } else {
            return projects.filter(project =>
                activeFilters.some(tag => project.technologies.includes(tag))
            );
        }
    }, [projects, activeFilters]);

    return (
        <List>
            {/* filter */}
            <div id="project-filter">
                <div
                    id="technology-filter"
                    className='flex flex-wrap justify-center items-center gap-4'
                >
                    {allTags.map(tag => {
                        let isActive = activeFilters.includes(tag)
                        return (
                            <button
                                key={tag}
                                className={`border rounded-md 
                                    p-2 
                                    shadow-sm 
                                    font-manrope
                                    text-sm
                                    ${isActive ?
                                        'bg-gray-50/90 text-gray-950 border-gray-950 inset-ring-1 inset-ring-gray-950'
                                        :
                                        'text-white bg-transparent border-white shadow-gray-50/50 border-b-2'}`}
                                onClick={() => { dispatch(isActive ? removeFilter(tag) : addFilter(tag)) }}
                            >
                                {tag}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* project cards/gallery */}
            <div
                id="project-gallery"
                className={`grid grid-cols-1 justify-items-center gap-6 `}
            >

                {filteredProjects.map((project, index) => {
                    return (
                        <div
                            id="project-gallery-element"
                            key={index}
                            className={`w-full`}

                        >
                            <ProjectCardDetailed
                                project={project}
                                index={index}
                            />
                        </div>
                    );
                })}
            </div>
        </List >
    );
};
