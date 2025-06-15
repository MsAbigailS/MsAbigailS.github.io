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
import { StickyHeader } from '../stories/headers/StickyHeader'
import { BubbleCard } from '../stories/cards/BubbleCard'
import { GradientText } from '../stories/text/GradientText'

export default function Projects() {


    // setting up meta tag only on mount
    useEffect(() => {
        setMeta('Projects', `The showcase for our projects.`)
    }, [])

    const navigate = useNavigate()


    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 bg-linear-30 from-blue-500/15 to-blue-500/15">
            <StickyHeader routes={[
                { text: 'Home', route: '#projects', nav: () => navigate('/') },
                { text: 'Log', route: '#buildlog', nav: () => navigate('/build-log') },
                { text: 'Resume', route: '#resume', nav: () => navigate('/resume') }
            ]} />

            <div className="m-6">
                <BubbleCard>

                    <div
                        className="w-full flex items-center justify-center text-center h-full text-6xl md:text-8xl mb-10 mt-35"
                    >
                        <GradientText
                            text="Project Showcase"
                            primaryColor="from-gray-100/100"
                            secondaryColor="white"
                            weight="font-bold"
                        />
                    </div>

                    <p className={`text-center mb-6 ml-6 mr-6`}>A showcase of sleepless nights, too much coffee, and a whole lot of code</p>

                    <ProjectList />
                </BubbleCard>
            </div>
        </div >
    )
}