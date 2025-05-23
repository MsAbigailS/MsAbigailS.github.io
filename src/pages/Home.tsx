import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/standing.png'
import aboutMeImg from '../assets/typing.png'
import { useVisible } from '../hooks/useVisible'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"
import { TextAnimation } from '../stories/TextAnimation'

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

    const navigate = useNavigate()
    const gotoProjects = () => {
        navigate('/Projects')
    }

    const el = document.getElementById('cursor')

    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY })
        }

        const handleScroll = () => {
            setScrollPos({ x: window.scrollX, y: window.scrollY })
        }

        window.addEventListener('mousemove', handleMouse)
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('mousemove', handleMouse)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const absPos = {
        x: pos.x + scrollPos.x,
        y: pos.y + scrollPos.y
    }

    el?.style.setProperty('transform', `translate(${absPos.x}px, ${absPos.y}px)`)

    // visibility control for animations
    const amoutMe = useRef<HTMLDivElement | null>(null)
    const isVisible = useVisible(amoutMe)

    return (
        // <div data-id="main" className={`perspective-10 relative`}>
        <div data-id="main">
            {/* <div id="cursor" className={`absolute translate-z-5 min-h-50 min-w-50 bg-purple-800 translate-x-[-50%] translate-y-[-50%] rounded-full pointer-events-none blur-xl opacity-25`}>
            </div> */}

            {/* Hero/initial view */}
            <div className={`translate-z-2 h-screen flex flex-col overflow-hidden`}>
                <Header left={<span onClick={gotoProjects}>Projects</span>} right={<span>Resume</span>} />
                <div data-id="hero" className="flex lg:flex-grow lg:flex-row flex-col justify-center items-center w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-9xl font-inknut p-6">Abigail</div>
                        <div className="font-assistant text-2xl pb-6">Welcome to my website!</div>
                    </div>
                    <img src={heroImg} alt="heroImg" className="h-80 pt-6 pl-6" />
                </div>
            </div>

            {/* About me */}
            <div data-id="about" ref={amoutMe} className={`flex flex-col-reverse lg:flex-row justify-center items-center ease-in-out transition-opacity duration-1000  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`flex-[1]`}>
                    <img src={aboutMeImg} alt="aboutMeImg" className="lg:h-160 lg:flex hidden" />
                </div>
                <div className={`flex-[1] lg:text-start text-center pl-5 pr-5 lg:pl-5 lg:pr-10`}>
                    <div id="professionalSummary">
                        <p data-id="subject-header">Software Engineer</p>
                        <div>I'm a <TextAnimation text="software engineer" animation='appearSlide' /> with a passion for building projects. I love to learn new things and work on challenging projects.</div>
                    </div>
                    <div id="skillsSummary">
                        <p data-id="subject-header">What am I good at?</p>
                        <div>I strongly believe software engineers should be able to work on <TextAnimation text="any part of a project" animation='appearSlide' />, but I have a few areas of expertise:
                            <ul className="list-disc pl-6 mt-3">
                                <li><strong>Full-Stack Development</strong>
                                    <ul className="list-disc pl-6">
                                        <li>Built and deployed end-to-end applications</li>
                                        <li>Comfortable working across both front-end and back-end</li>
                                    </ul>
                                </li>

                                <li><strong>Languages</strong>
                                    <ul className="list-disc pl-6">
                                        <li>JavaScript</li>
                                        <li>TypeScript</li>
                                        <li>Python</li>
                                        <li>SQL</li>
                                    </ul>
                                </li>

                                <li><strong>Front-End</strong>
                                    <ul className="list-disc pl-6">
                                        <li>React (custom components, hooks, state management)</li>
                                        <li>Responsive and accessible UI design</li>
                                        <li>Figma for design collaboration</li>
                                    </ul>
                                </li>

                                <li><strong>Back-End</strong>
                                    <ul className="list-disc pl-6">
                                        <li>Python with Flask</li>
                                        <li>RESTful API design and integration</li>
                                        <li>Basic data modeling and SQL queries</li>
                                    </ul>
                                </li>

                                <li><strong>Tooling & Workflow</strong>
                                    <ul className="list-disc pl-6">
                                        <li>Git & GitHub for version control</li>
                                        <li>Agile development practices</li>
                                    </ul>
                                </li>
                            </ul>



                        </div>
                    </div>
                    <div id="personalitySummary">
                        <p data-id="subject-header">Beyond the code.</p>
                        <div>I'm a <TextAnimation text="nerd" animation='appearSlide' /> at heart. When I'm not coding, I'm usually playing video games, taking care of my growing collection of house plants, or trying to get some coffee. </div>
                    </div>
                </div>
            </div>



            {/* call to action */}
            <div className={`mt-25 pb-30 flex justify-center items-center`}>
                <div data-id="subject-header" id="callToAction" onClick={gotoProjects} className={`relative rounded-xs overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer group text-7xl`}>
                    {/* background color movement */}
                    <div className={`min-h-full translate-z-0 flex-grow justify-center items-center flex 
                        text-white
                        p-2
                        bg-gradient-to-r from-white to-white
                        translate-x-[-102%]
                        transition-all
                        group-hover:translate-x-[0%]
                        duration-[700ms] ease-in-out
                        text-center
                        `}>
                        Want to see my projects?
                    </div>
                    {/* text that shows */}

                    <div className={`absolute mix-blend-difference 
                        duration-[700ms] ease-in-out text-center`}>
                        Want to see my projects?
                    </div>
                </div>
            </div>

            {/* form */}
            {/* <div>
                Contact form
            </div> */}
            {/* <Footer /> */}
        </div >
    )
}