import { useEffect } from 'react'
import { ConstructionNotice } from "../stories/ui/ConstructionNotice"
import { BuildLogList } from "../stories/lists/BuildLogList"
import { Header } from "../stories/ui/Header"
import { useNavigate } from 'react-router-dom'
import { routes } from '../stories/helpers/routing'
import { setMeta } from '../stories/helpers/routing'

export default function BuildLog() {
    // setting up meta tag only on mount
    useEffect(() => {
        setMeta('Build Log', `A showcase of the development process for my website.`)
    }, [])

    return (
        <div
            data-id="build-log-page"
            className="animate-fade-in animation-delay-300 text-white
            bg-linear-30 from-[#468186]/80 to-blue-500/10"
        >

            <Header left={"Home"} right={"Resume"} />

            <BuildLogList />

        </div >
    )
}