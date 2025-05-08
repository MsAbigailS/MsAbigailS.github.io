import { useEffect } from 'react'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"

export default function Home() {
    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Temporary Page"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Temporary page')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Temporary page'
            document.head.appendChild(meta)
        }
    }, [])

    return (
        <div data-id="main">
            <Header />
            <div>HOME PAGE</div>
            <Footer />
        </div>
    )
}