import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { useState } from 'react'
import { Header } from './stories/Header'
import { Footer } from './stories/Footer'

// forcing webpage to start at top w/ nav
const ScrollToTop: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  console.log('ScrollToTop', location.pathname)
  return <>
    {props.children}
  </>
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        {/* all pages */}
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </ScrollToTop>
    </Router >
  )
}

export default App
