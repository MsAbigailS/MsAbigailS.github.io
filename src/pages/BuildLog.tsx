import { ConstructionNotice } from "../stories/ui/ConstructionNotice"
import { BuildLogList } from "../stories/lists/BuildLogList"
import { Header } from "../stories/ui/Header"
import { useNavigate } from 'react-router-dom'

export default function BuildLog() {
    const navigate = useNavigate()
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