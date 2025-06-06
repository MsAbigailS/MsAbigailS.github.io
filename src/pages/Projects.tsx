import { useEffect, useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import projects from '../data/projects.json'
import { ElementAnimation } from '../stories/ui/ElementAnimation'
import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/ui/Header"
import { Footer } from "../stories/ui/Footer"
import { Card } from "../stories/ui/Card"
import { ProjectCard } from '../stories/cards/ProjectCard'
import { List } from '../stories/ui/List'
import { setMeta } from '../stories/helpers/routing'
import { ProjectList } from '../stories/lists/ProjectList'

export default function Projects() {


    // setting up meta tag only on mount
    useEffect(() => {
        setMeta('Projects', `The showcase for our projects.`)
    }, [])


    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 bg-linear-30 from-[#468186]/30 to-blue-500/15">
            <Header left={'Home'} right={'Resume'} />

            <h1 data-id="subject-header" className={`text-center mb-10`}>
                Project Showcase
            </h1>

            <p className={`text-center mb-6 ml-6 mr-6`}>A showcase of sleepless nights, too much coffee, and a whole lot of code</p>




            <ProjectList />
        </div >
    )
}