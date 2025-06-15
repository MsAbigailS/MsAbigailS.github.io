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
import { BubbleProjectCard } from '../stories/cards/BubbleProjectCard'
import { BubbleCard } from '../stories/cards/BubbleCard'
import { Projects } from '../stories/home/Projects'
import { svgs } from '../utils/maps/svgMap'
import { Purpose } from '../stories/home/Purpose'
import { GradientText } from '../stories/text/GradientText'

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
            top: element.getBoundingClientRect().top + window.scrollY - 20,
            behavior: 'smooth',
        });
    }

    return (
        <div
            data-id="main"
            className="animate-fade-in animation-delay-300 p-6
            bg-linear-30 from-blue-500/10 to-blue-500/10
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
            {/* <div
                data-id="about"
                ref={amoutMe}
                className={`ease-in-out transition-opacity duration-1000 mt-10
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <AboutMe />
            </div> */}


            <span ref={projectLink}><Projects /></span>
            <span ref={aboutWebsite}><Purpose /></span>



            {/* coming soon */}
            <div
                data-id="coming-soon"
                ref={comingSoon}
                className={`flex flex-col justify-center items-center text-center p-10 ease-in-out 
                    transition-opacity duration-1000`}
            >
                <div
                    className="w-full flex items-center justify-center text-start md:text-center h-full text-6xl md:text-8xl mb-10 mt-25"
                >
                    <GradientText
                        text="Current Goals"
                        primaryColor="from-gray-100/100"
                        secondaryColor="white"
                        weight="font-bold"
                    />
                </div>
                <div className="font-manrope">
                    This website is a
                    <span>
                        <TextAnimation text="living work in progress" animation='appearSlide' />
                        , so here are some of the things I'm working on (granted I remember to check things off 😅)
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