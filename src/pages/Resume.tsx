import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/ui/Header"
import resume from '../assets/Abigail_Smith_Resume.pdf'

export default function Resume() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    const goToResume = () => {
        navigate('/resume')
    }
    return (
        <div data-id="main" className="animate-fade-in animation-delay-300 h-screen">
            <Header left={<span onClick={goToHome}>Home</span>} right={<span onClick={goToResume}>Resume</span>} />
            <embed src={resume} type="application/pdf" width="100%" height="100%" />
        </div >
    )
}