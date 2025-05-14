import { useEffect } from 'react'
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

    return (
        <div data-id="main">
            <Header />

            <h1 data-id="subject-header" className={`text-center mb-10`}>
                Project Showcase
            </h1>

            {/* TODO: Make filterable project page */}
            <div className={`border-1 text-center mb-10`}>
                Here is where I'll have a cool filter
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