import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Project from './pages/Project'
import { useState } from 'react'
import { Header } from './stories/ui/Header'
import { Footer } from './stories/ui/Footer'

// forcing webpage to start at top w/ nav
const ScrollToTop: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 10)
  }, [location])

  return <>
    {props.children}
  </>
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        {/* all pages */}
        <div className="min-h-screen flex flex-col bg-[#010102]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </ScrollToTop>
    </Router >
  )
}

export default App
