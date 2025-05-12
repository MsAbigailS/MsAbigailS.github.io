import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { useState } from 'react'
import { Header } from './stories/Header'
import { Footer } from './stories/Footer'
function App() {

  return (
    <Router>
      {/* all pages */}
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>


      {/* TODO: removing until nav layout decided */}
      {/* <div data-id="main">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page2">PAGE2</Link>
        </nav>
      </div> */}
    </Router >
  )
}

export default App
