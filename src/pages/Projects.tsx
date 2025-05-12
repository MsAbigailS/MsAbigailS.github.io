import { useEffect } from 'react'
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

            <div className={`flex flex-row flex-wrap justify-center items-center`}>
                <Card title="Project 1" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="pink" />
                <Card title="Project 2" description="Another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="blue" />
                <Card title="Project 3" description="Yet another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
                <Card title="Project 4" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="green" />
                <Card title="Project 5" description="Another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="orange" />
                <Card title="Project 6" description="Yet another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
                <Card title="Project 7" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="pink" />
                <Card title="Project 4" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="green" />
                <Card title="Project 5" description="Another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="orange" />
                <Card title="Project 6" description="Yet another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
                <Card title="Project 7" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="pink" />
                <Card title="Project 4" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="green" />
                <Card title="Project 5" description="Another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="orange" />
                <Card title="Project 6" description="Yet another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
                <Card title="Project 7" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="pink" />
            </div>
            <Footer />
        </div >
    )
}