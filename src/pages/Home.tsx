import { useEffect } from 'react'
import heroImg from '../assets/standing.png'
import { Header } from "../stories/Header"
import { Footer } from "../stories/Footer"
import { Card } from "../stories/Card"

export default function Home() {
    // setting up meta tag only on mount
    useEffect(() => {
        document.title = "My Portfolio | Home"
        const description = document.querySelector('meta[name="description"]')

        if (description) {
            description.setAttribute('content', 'Home')
        } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = 'Home page'
            document.head.appendChild(meta)
        }
    }, [])

    return (
        <div data-id="main">
            <Header />
            <div data-id="hero" className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-9xl font-inknut p-6">Abigail</div>
                    <div className="font-assistant text-2xl pb-6">Welcome to my website!</div>
                </div>
                <img src={heroImg} alt="heroImg" className="h-80 pt-6 pl-6" />
            </div>

            <Card title="Personal Website" description="A website to showcase the cool stuff I've worked on!" technologies={["React", "Typescript", "Tailwindcss"]} />
            <Footer />
        </div>
    )
}