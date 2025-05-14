import { useEffect, useState } from 'react'
import projects from '../data/projects.json'
import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"
import { Card } from "../stories/Card"

export default function Projects() {
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
            div.className = `border-1 min-w-1/10 rounded-sm text-center`
            div.innerText = key
            list?.appendChild(div)
        })
    }, [])

    return (
        <div data-id="main">
            <Header />

            <h1 data-id="subject-header" className={`text-center mb-10`}>
                Project Showcase
            </h1>

            {/* TODO: Make filterable project page */}
            <div className={`flex flex-row justify-center min-w-full max-w-full mb-10 *:ml-1 *:mr-1`}>
                <div className={`border-1 min-w-1/10 rounded-sm text-center`}>technologies</div>
                <div id="availableTechnologies">

                </div>
                <input type="text" placeholder="Search..." className={`border-2 min-w-1/4 border-gray-50 rounded-md`} />
            </div>

            <div className={`flex flex-row flex-wrap justify-center items-center`}>
                {projects.map((project, index) => {
                    return (
                        <div key={index} className={`flex flex-row flex-wrap justify-center items-center`}>
                            <Card title={project.title} description={project.description} technologies={project.technologies}
                                completed={project.demo} url={project.demo} complexity={project.complexity} challenges={project.challenges} />
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div >
    )
}