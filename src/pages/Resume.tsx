import { useNavigate } from 'react-router-dom'
import { Header } from "../stories/Header"

export default function Resume() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    const goToResume = () => {
        navigate('/resume')
    }
    return (
        <div data-id="main">
            <Header left={<span onClick={goToHome}>Home</span>} right={<span onClick={goToResume}>Resume</span>} />
            This page is under construction. Please check back later.
        </div >
    )
}