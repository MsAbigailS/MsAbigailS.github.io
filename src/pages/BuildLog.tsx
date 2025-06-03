import { useEffect } from 'react'
import { ConstructionNotice } from "../stories/ui/ConstructionNotice"
import { BuildLogList } from "../stories/lists/BuildLogList"
import { Header } from "../stories/ui/Header"
import { useNavigate } from 'react-router-dom'

export default function BuildLog() {
    const navigate = useNavigate()
    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Build Log"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Build Log')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Build Log'
            document.head.appendChild(meta)
        }
    }, [])
    const goToHome = () => {
        navigate('/')
    }
    const goToResume = () => {
        navigate('/Resume')
    }
    const goToBuildlog = () => {
        navigate('/build-log')
    }

    return (
        <div
            data-id="build-log-page"
            className="animate-fade-in animation-delay-300 text-white
            bg-linear-30 from-[#468186]/80 to-blue-500/10"
        >

            <Header left={<span onClick={goToHome}>Home</span>} right={<span onClick={goToResume}>Resume</span>} />

            {/* <ConstructionNotice /> */}

            <BuildLogList />

        </div >
    )
}