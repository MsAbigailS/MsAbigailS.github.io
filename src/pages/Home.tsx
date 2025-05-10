import { useEffect } from 'react'
import heroImg from '../assets/standing.png'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"
import { Card } from "../stories/Card"
import { Tag } from "../stories/Tag"

export default function Home() {
    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Home"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Home')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Home page'
            document.head.appendChild(meta)
        }
    }, [])

    return (
        <div data-id="main">
            {/* Hero/initial view */}
            <div className={`h-screen flex flex-col overflow-hidden`}>
                <Header />
                <div data-id="hero" className="flex flex-row justify-center items-center w-full flex-grow">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-9xl font-inknut p-6">Abigail</div>
                        <div className="font-assistant text-2xl pb-6">Welcome to my website!</div>
                    </div>
                    <img src={heroImg} alt="heroImg" className="h-80 pt-6 pl-6" />
                </div>
            </div>

            {/* About me */}
            <div data-id="about" className={`flex flex-row justify-center items-center pl-10 pr-10`}>
                <div className={`flex-[1]`}>
                    img
                </div>
                <div className={`flex-[1]`}>
                    <div id="professionalSummary" className={``}>
                        <p data-id="subject-header">Software Engineer</p>
                        <p>I'm a <span data-id="highlight">software engineer</span> with a passion for building projects. I love to learn new things and work on challenging projects.</p>
                    </div>
                    <div id="skillsSummary">
                        <p data-id="subject-header">What am I good at?</p>
                        <p>I strongly believe software engineers should be able to work on <span data-id="highlight">any part of a project</span>, but I have a few areas of expertise:
                            <ul>
                                <li>My list item 1</li>
                                <li>My list item 2</li>
                                <li>My list item 3</li>
                            </ul>
                        </p>
                    </div>
                    <div id="personalitySummary">
                        <p data-id="subject-header">Beyond the code.</p>
                        <p>I'm a nerd.</p>
                    </div>
                    {/* NOTE: Maybe add something about currently into and/or favorite hackathon memory for more personality*/}

                </div>
            </div>

            <div data-id="subject-header" id="callToAction" className={`relative min-w-full overflow-hidden flex flex-col items-center mt-20`}>
                {/* TODO: make hover invert color to highlight and change cursor */}
                <p className={`border-2 min-w-full text-center`}>Curious about my projects?</p>
            </div>

            {/* <div className={`flex flex-row`}>
                <Card title="Project 1" description="A project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="pink" />
                <Card title="Project 2" description="Another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} theme="blue" />
                <Card title="Project 3" description="Yet another project I worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
            </div> */}
            <Footer />
        </div >
    )
}