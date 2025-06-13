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
import { setMeta } from '../stories/helpers/routing'
import { Image } from '../stories/ui/Image'
import { Hero } from '../stories/home/Hero'
import { StickyHeader } from '../stories/headers/StickyHeader'

export default function Home() {
    const navigate = useNavigate()
    const gotoProjects = () => { navigate('/Projects') }
    const goToResume = () => { navigate('/Resume') }
    const goToBuildlog = () => { navigate('/build-log') }

    // setting up meta tag only on mount
    useEffect(() => {
        setMeta('Home', `Welcome to my personal website! 
            Here you can find my projects, resume, and build log.
            Explore my work and learn more about me as a developer.`)
    }, [])

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
    const buildlogRef = useRef<HTMLDivElement | null>(null)
    const aboutWebsite = useRef<HTMLDivElement | null>(null)
    const isVisible = useVisible(amoutMe)
    const projectVisible = useVisible(projectLink)
    const comingSoonVisible = useVisible(comingSoon)

    const handleNavClick = (route: string) => {
        let element
        if (route === '#buildlog' && buildlogRef.current) {
            element = buildlogRef.current;
        } else if (route === '#projects' && projectLink.current) {
            element = projectLink.current
        } else if (route === '#aboutWebsite' && aboutWebsite.current) {
            element = aboutWebsite.current
        } else if (!element) {
            return
        }

        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerHeight / 2 - element.offsetHeight / 2;

        window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth',
        });
    }

    return (
        <div
            data-id="main"
            className="animate-fade-in animation-delay-300 p-6
            bg-linear-30 from-[#468186]/10 to-blue-500/10
            max-w-screen overflow-x-hidden"
        >
            <div>
                <StickyHeader routes={[
                    { text: 'Projects', route: '#projects', nav: handleNavClick },
                    { text: 'About', route: '#aboutWebsite', nav: handleNavClick },
                    { text: 'Log', route: '#buildlog', nav: handleNavClick },
                    { text: 'Resume', route: '#resume', nav: goToResume }
                ]} />
            </div>
            <div>
                <Hero />
            </div>

            {/* About me */}
            <div
                data-id="about"
                ref={amoutMe}
                className={`ease-in-out transition-opacity duration-1000 mt-10
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* <AboutMe /> */}
            </div>


            {/* projects link */}
            <div ref={projectLink} className={`mt-50 mb-30 flex justify-center items-center ease-in-out transition-opacity duration-1000  ${projectVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div
                    data-id="subject-header"
                    id="callToAction"
                    onClick={gotoProjects}
                    className={`relative m-2 p-2 border-1 border-white-500 text-white
                    hover:border-white rounded-lg overflow-hidden flex flex-col
                    justify-center items-center hover:cursor-pointer`}
                >
                    <TextAnimation
                        text="View My Projects"
                        animation='hoverSlide'
                    />
                </div>
            </div>



            {/* what is this website */}
            <div
                ref={aboutWebsite}
                className={`p-2 md:pt-10 flex justify-center items-center pl-10 pr-10`}
            >
                <ElementAnimation
                    animation={['shine']}
                    speed="slow"
                >

                    <div
                        className={`rounded-lg hover:ring-2 hover:ring-blue-200/20 
                            transition-all duration-300 ease-in-out
                            shadow-lg shadow-gray-500/15 `}
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

            {/* build log link */}
            <div className={`mt-50 mb-30 flex justify-center items-center ease-in-out transition-opacity duration-1000 `}>
                <div
                    ref={buildlogRef}
                    data-id="subject-header"
                    id="callToAction"
                    onClick={goToBuildlog}
                    className={`relative p-2 border-1 border-white-500 hover:border-white 
                    rounded-lg overflow-hidden flex flex-col justify-center items-center
                    hover:cursor-pointer`}
                >
                    <TextAnimation
                        text="View My Build Log"
                        animation='hoverSlide'
                    />
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