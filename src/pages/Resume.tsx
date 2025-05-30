import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/ui/Header"

export default function Resume() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    const goToResume = () => {
        navigate('/resume')
    }
    return (
        <div data-id="main" className="animate-fade-in animation-delay-300">
            <Header left={<span onClick={goToHome}>Home</span>} right={<span onClick={goToResume}>Resume</span>} />
            This page is under construction. Please check back later.
        </div >
    )
}