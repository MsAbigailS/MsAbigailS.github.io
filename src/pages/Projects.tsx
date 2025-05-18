import { useEffect, useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import projects from '../data/projects.json'
import { ElementAnimation } from '../stories/ElementAnimation'
import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"
import { Card } from "../stories/Card"

export default function Projects() {
    const [count, setCount] = useState(0)
    const [selectedTech, setSelectedTech] = useState<string[]>([])

    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Temporary Page"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Temporary page')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Temporary page'
            document.head.appendChild(meta)
        }
    }, [])

    // creating tech filter list by
    // taking all techs from projects.json
    // and adding to pg
    useEffect(() => {
        const list = document.getElementById('availableTechnologies')
        if (!list) return
        if (list.childElementCount > 0) {
            list.innerHTML = ''
        }

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

    // updating view based on selected filters
    // TODO: make this more efficient
    useEffect(() => {
        const projectPar = document.getElementById('projects')
        if (!projectPar) return
        if (selectedTech.length === 0) {
            Array.from(projectPar.children).map((child) => {
                (child as HTMLElement).className = 'block'
            })
            return
        }

        // each card
        Array.from(projectPar.children).map((child) => {
            let currTech = (child as HTMLElement).querySelector('#technologies')?.children
            let show = false

            // each technology on card
            Array.from(currTech ?? []).map((tech) => {
                if (selectedTech.includes(tech.textContent ?? '')) {
                    // (child as HTMLElement).className = 'hidden'
                    show = true;
                    if (child.className.includes('hidden')) {
                        (child as HTMLElement).className = (child as HTMLElement).className.replace('hidden', 'block')
                    } else {
                        (child as HTMLElement).className = 'block';
                    }
                    console.log(child || '');
                }
            })

            if (!show) {
                if (child.className.includes('block')) {
                    (child as HTMLElement).className = (child as HTMLElement).className.replace('block', 'hidden')
                } else {
                    (child as HTMLElement).className = 'hidden';
                }
            }
        })

    }, [selectedTech])

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }

    // toggling if list is visible
    function toggleList() {
        const el = document.getElementById('availableTechnologies')
        if (!el) return
        if (el.className.includes('hidden')) {
            el.className = el.className.replace('hidden', 'block')
        } else {
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
        <div data-id="main">
            <Header left={<span onClick={goToHome}>Home</span>} right={<span>Resume</span>} />

            <h1 data-id="subject-header" className={`text-center mb-10`}>
                Project Showcase
            </h1>

            {/* TODO: Make filterable project page */}
            <div className={`flex flex-row justify-center min-w-full max-w-full mb-10 *:ml-1 *:mr-1 *:select-none`}>
                <div>
                    <div onClick={toggleList} className={`border-1 transition-colors ease-in-out duration-[300ms] pl-2 pr-2 
                        hover:cursor-pointer hover:bg-white hover:text-[#010102] min-w-1/10 rounded-sm text-center
                        tracking-widest`}>
                        filter: technology
                        <span>
                            {count > 0 ? ` (${count})` : ''}

                        </span>
                    </div>
                    <div id="availableTechnologies" className={`hidden z-30 absolute bg-[#010102] justify-center items-center
                        text-zinc-400 rounded-lg shadow-lg shadow-[#010102]
                        *:min-w-full *:hover:cursor-pointer *:hover:text-white
                        *:ease-in-out *:duration-[100ms] *:transition-all *:pl-5 *:pr-5 *:pt-1 *:pb-1`}>
                    </div>
                </div>
                {/* <input type="text" placeholder="Search..." className={`border-2 pl-3 pr-3 min-w-1/4 rounded-md outline-hidden `} /> */}
            </div>

            <div id="projects" className={`flex flex-row flex-wrap justify-center items-center *:p-2`}>
                {projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <ElementAnimation animation='tilt'>
                                <ElementAnimation animation='shine'>
                                    <Card title={project.title} description={project.description} technologies={project.technologies}
                                        completed={project.demo} url={project.demo} complexity={project.complexity} challenges={project.challenges}
                                        image={project.img}
                                        awards={project.awards} />
                                </ElementAnimation>
                            </ElementAnimation>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div >
    )
}