import { useEffect, useState, useRef } from 'react'
import { List } from '../ui/List';
import { ProjectCard } from '../cards/ProjectCard';
import type { Project } from '../../types/project';
import projectData from '../../data/projects.json';

export interface ProjectListProps {
    projects?: Project[];
}

export const ProjectList = (
    {
        projects = projectData
    }: ProjectListProps) => {

    // tracker for technology filter
    const [count, setCount] = useState(0)
    const [selectedTech, setSelectedTech] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const toggleListRef = useRef<HTMLDivElement | null>(null)

    // creating tech filter list by
    // taking all techs from projects.json
    // and adding to pg
    useEffect(() => {
        const list = document.getElementById('availableTechnologies')

        if (!list) return

        if (list.childElementCount > 0) { list.innerHTML = '' } // no technologies -> empty list


        let technologies: Map<string, number> = new Map()
        projects.forEach(project => {
            project.technologies.forEach(technology => {
                if (technologies.has(technology)) {
                    technologies.set(technology, technologies.get(technology)! + 1)

                } else {
                    technologies.set(technology, 1)
                }
            })
        });
        technologies = new Map([...technologies.entries()].sort())
        technologies.forEach((value, key) => {
            const div = document.createElement('div')
            div.addEventListener('click', (e) => {
                filterSelection(e as unknown as React.MouseEvent<HTMLElement>)
            })
            div.innerText = key
            list?.appendChild(div)
        })
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (toggleListRef.current && !toggleListRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            toggleList()
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen])

    // toggling if list is visible
    function toggleList() {
        const el = document.getElementById('availableTechnologies')
        if (!el) return
        if (el.className.includes('hidden')) {
            setIsOpen(true)
            el.className = el.className.replace('hidden', 'block')
        } else {
            setIsOpen(false)
            el.className = el.className.replace('block', 'hidden')
        }
    }

    // filter selection
    function filterSelection(e: React.MouseEvent<HTMLElement>) {
        if (!e.currentTarget) return

        if ((e.currentTarget as HTMLElement).className.includes('bg-gray-700')) {
            // de-selecting
            (e.currentTarget as HTMLElement).className = (e.currentTarget as HTMLElement).className.replace(' bg-gray-700 text-white', ' text-zinc-400')
            setCount(count => count - 1)
            setSelectedTech(selectedTech => {
                if (selectedTech.includes((e.currentTarget as HTMLElement).textContent ?? '')) {
                    return selectedTech.filter(item => item !== (e.currentTarget as HTMLElement).textContent)
                } else {
                    return selectedTech
                }
            })
        } else {
            // selecting
            (e.currentTarget as HTMLElement).className += ' bg-gray-700 text-white';
            setCount(count => count + 1)
            setSelectedTech(selectedTech => {
                if (selectedTech.includes((e.currentTarget as HTMLElement).textContent ?? '')) {
                    return selectedTech
                } else {
                    return [...selectedTech, (e.currentTarget as HTMLElement).textContent ?? '']
                }
            })
        }
    }

    return (
        <List>
            {/* page filter */}
            <div
                className={`flex flex-row justify-center min-w-full 
                max-w-full mb-10 *:ml-1 *:mr-1 *:select-none`}
            >
                <div className="relative">
                    {/* filter button */}
                    <div
                        onClick={toggleList}
                        className={`border-1 transition-colors ease-in-out duration-[300ms] pl-2 pr-2 
                            hover:cursor-pointer hover:bg-white hover:text-[#010102] min-w-1/10 rounded-sm text-center
                            tracking-widest`}
                    >
                        filter: technology
                        <span> {count > 0 ? ` (${count})` : ''}</span>
                    </div>
                    {/* list dropdown */}
                    <div
                        ref={toggleListRef}
                        id="availableTechnologies"
                        className={`
                            hidden absolute top-full mt-2 z-30 bg-[#010102] rounded-lg shadow-lg shadow-[#010102]
                            text-zinc-400 flex-col max-h-[60vh] overflow-y-auto
                            *:min-w-full *:hover:cursor-pointer *:hover:text-white
                            *:ease-in-out *:duration-100 *:transition-all *:pl-5 *:pr-5 *:pt-1 *:pb-1
                          `}
                    >
                    </div>
                </div>
            </div>

            {/* project cards/gallery */}
            <div
                id="projects"
                data-id="project-list"
                className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6 p-12`}
            >
                {projects.map((project, index) => {
                    let isVisible: boolean
                    if (selectedTech.length == 0) { isVisible = true }
                    else { isVisible = project.technologies.some(tech => selectedTech.includes(tech)); }
                    return (
                        <div
                            key={index}
                            className={`${isVisible ? 'block' : 'hidden'}`}
                        >
                            <ProjectCard project={project} />
                        </div>
                    );
                })}
            </div>
        </List>
    );
};
