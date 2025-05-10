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
                <div data-id="hero" className="flex lg:flex-grow lg:flex-row flex-col justify-center items-center w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-9xl font-inknut p-6">Abigail</div>
                        <div className="font-assistant text-2xl pb-6">Welcome to my website!</div>
                    </div>
                    <img src={heroImg} alt="heroImg" className="h-80 pt-6 pl-6" />
                </div>
            </div>

            {/* About me */}
            <div data-id="about" className={`flex lg:flex-row flex-col-reverse justify-center items-center pl-10 pr-10`}>
                <div className={`flex-[1]`}>
                    img
                </div>
                <div className={`flex-[1] lg:text-start text-center`}>
                    <div id="professionalSummary">
                        <p data-id="subject-header">Software Engineer</p>
                        <p>I'm a <span data-id="highlight">software engineer</span> with a passion for building projects. I love to learn new things and work on challenging projects.</p>
                    </div>
                    <div id="skillsSummary">
                        <p data-id="subject-header">What am I good at?</p>
                        <p>I strongly believe software engineers should be able to work on <span data-id="highlight">any part of a project</span>, but I have a few areas of expertise:
                        </p>
                    </div>
                    <div id="personalitySummary">
                        <p data-id="subject-header">Beyond the code.</p>
                        <p>I'm a nerd.</p>
                    </div>
                    {/* NOTE: Maybe add something about currently into and/or favorite hackathon memory for more personality*/}

                </div>
            </div>



            {/* call to action */}
            <div className={`mt-25 flex justify-center items-center`}>
                <div data-id="subject-header" id="callToAction" className={`relative rounded-xs overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer group text-7xl`}>
                    {/* background color movement */}
                    <div className={`border-1 border-amber-500 min-h-full translate-z-0 flex-grow justify-center items-center flex 
                        text-white
                        p-2
                        bg-gradient-to-r from-white to-white
                        translate-x-[-102%]
                        transition-all
                        group-hover:translate-x-[0%]
                        duration-[700ms] ease-in-out
                        `}>
                        Want to see my projects?
                    </div>
                    {/* text that shows */}

                    <div className={`absolute mix-blend-difference 
                        duration-[700ms] ease-in-out`}>
                        Want to see my projects?
                    </div>

                </div>
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