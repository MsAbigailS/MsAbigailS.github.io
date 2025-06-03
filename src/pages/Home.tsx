import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImg from '../assets/standing.png'
import { AboutMe } from '../stories/ui/AboutMe'
import { useVisible } from '../hooks/useVisible'
import { Header } from "../stories/ui/Header"
import { Footer } from "../stories/ui/Footer"
import { TextAnimation } from '../stories/ui/TextAnimation'
import { IdeaList } from '../stories/lists/IdeaList'
import { GlassCard } from '../stories/cards/GlassCard'
import { ElementAnimation } from '../stories/ui/ElementAnimation'

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
    const goToResume = () => {
        navigate('/Resume')
    }
    const goToBuildlog = () => {
        navigate('/build-log')
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
    const projectLink = useRef<HTMLDivElement | null>(null)
    const comingSoon = useRef<HTMLDivElement | null>(null)
    const isVisible = useVisible(amoutMe)
    const projectVisible = useVisible(projectLink)
    const comingSoonVisible = useVisible(comingSoon)

    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 bg-linear-30 from-[#468186]/10 to-blue-500/10">

            {/* Hero/initial view */}
            <div className={`translate-z-2 h-screen flex flex-col overflow-hidden`}>
                <Header left={<span onClick={gotoProjects}>Projects</span>} right={<span onClick={goToResume}>Resume</span>} />
                <div data-id="hero" className="flex lg:flex-grow lg:flex-row flex-col justify-center items-center w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-9xl font-inknut p-6">Abigail</div>
                        <div className="font-assistant text-2xl pb-6">Welcome to my website!</div>
                    </div>
                    <img src={heroImg} alt="heroImg" className="h-80 pt-6 pl-6" />
                </div>
            </div>

            {/* About me */}
            <div
                data-id="about"
                ref={amoutMe}
                className={`ease-in-out transition-opacity duration-1000
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <AboutMe />
            </div>


            {/* call to action */}

            <div ref={projectLink} className={`mt-50 mb-30 flex justify-center items-center ease-in-out transition-opacity duration-1000  ${projectVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div data-id="subject-header" id="callToAction" onClick={gotoProjects} className={`relative p-2 border-1 border-white-500 hover:border-white rounded-lg overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer group text-7xl`}>
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

                        Explore My Projects

                    </div>
                    {/* text that shows */}

                    <div className={`absolute mix-blend-difference 
                        duration-[700ms] ease-in-out text-center`}
                    >
                        <div
                            className={` `}
                        >
                            Explore My Projects
                        </div>
                    </div>
                </div>
            </div>



            {/* what is this website */}
            <div
                className={`p-2 md:pt-10 flex justify-center items-center`}
            >
                <ElementAnimation
                    animation={['shine']}
                    speed="slow"
                >

                    <div
                        className={`rounded-lg hover:ring-2 hover:ring-blue-200/20 
                            transition-all duration-300 ease-in-out
                            shadow-lg shadow-gray-500/15`}
                    >

                        <GlassCard>

                            <div
                                data-id="subject-header"
                                className={`text-center text-5xl italic`}
                            >
                                About This Website
                            </div>

                            <div
                                className={`flex flex-col text-xl **:p-2 font-assistant`}
                            >

                                This site is my personal playground — a space where I document what I’m learning, building, and exploring as a developer.



                                <div
                                    className={`text-md mt-2`}
                                >
                                    You'll find...
                                    <ul>
                                        <li>🧩 Projects that showcase my work, from polished apps to experimental ideas</li>

                                        <li>🔄 Progress logs where I track daily updates and learning milestones</li>

                                        <li>🛠️ Technical breakdowns and notes from hands-on problem solving</li>

                                        <li>🎨 Explorations in UI/UX, animation, and creative development</li>
                                    </ul>
                                </div>
                                This isn’t just a portfolio — it’s a living archive of my growth, challenges, and curiosity. I built it for reflection, experimentation, and to share with anyone interested in the journey of building things from scratch.
                            </div>

                        </GlassCard>
                    </div>
                </ElementAnimation>
            </div>

            <div className={`mt-50 mb-30 flex justify-center items-center ease-in-out transition-opacity duration-1000 `}>
                <div data-id="subject-header" id="callToAction" onClick={goToBuildlog} className={`relative p-2 border-1 border-white-500 hover:border-white rounded-lg overflow-hidden flex flex-col justify-center items-center hover:cursor-pointer group text-7xl`}>
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

                        View My Build Log

                    </div>
                    {/* text that shows */}

                    <div className={`absolute mix-blend-difference 
                        duration-[700ms] ease-in-out text-center`}
                    >
                        <div
                            className={` `}
                        >
                            View My Build Log
                        </div>
                    </div>
                </div>
            </div>


            {/* coming soon */}
            <div
                data-id="coming-soon"
                ref={comingSoon}
                className={`flex flex-col justify-center items-center text-center p-10 ease-in-out 
                    transition-opacity duration-1000  ${comingSoonVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <p data-id="subject-header">Coming Soon</p>
                <div>
                    This website is a
                    <span>
                        <TextAnimation text="living work in progress" animation='appearSlide' />
                        .
                    </span>
                </div>


                <IdeaList
                    // limit={4}
                    status={['In Progress', 'Pending']}
                />
            </div>
        </div >
    )
}