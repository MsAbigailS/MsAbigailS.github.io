import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/ui/Header"
import resume from '../assets/Abigail_Smith_Resume.pdf'
import { setMeta } from '../stories/helpers/routing'

export default function Resume() {
    // setting up meta tag only on mount
    useEffect(() => {
        setMeta('Resume', `My resume.`)
    }, [])

    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 h-screen bg-linear-30 from-[#468186]/10 to-blue-500/10">
            <Header left={'Home'} right={'Projects'} />
            <div
                className={`flex justify-center items-center`}
            >
                <a
                    href={resume}
                    download="Abby-Smith-Resume.pdf"
                    className="lg:hidden border-2 m-3 p-3 rounded-lg inline-block text-white hover:bg-blue-700 transition-colors"
                >
                    Download Resume
                </a>
            </div>

            <div
                className="h-full bg-white"
            >
                <embed className={`bg-white`} src={resume} type="application/pdf" width="100%" height="100%" />
            </div>
        </div >
    )
}