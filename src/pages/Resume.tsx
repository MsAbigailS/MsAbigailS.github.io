import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/ui/Header"
import resume from '../assets/Abigail_Smith_Resume.pdf'

export default function Resume() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    const goToProjects = () => {
        navigate('/projects')
    }
    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 h-screen bg-linear-30 from-[#468186]/10 to-blue-500/10">
            <Header left={<span onClick={goToHome}>Home</span>} right={<span onClick={goToProjects}>Projects</span>} />
            <div
                className="h-full"
            >
                <embed src={resume} type="application/pdf" width="100%" height="100%" />
            </div>
        </div >
    )
}