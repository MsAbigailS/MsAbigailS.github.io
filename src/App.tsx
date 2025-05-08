import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import Page2 from './pages/PAGE2'
import { useState } from 'react'
import { Header } from './stories/Header'
import { Footer } from './stories/Footer'
function App() {

  return (
    <Router>
      {/* all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>

      <div className="min-h-screen flex flex-col">
        
        <div data-id="main">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/page2">PAGE2</Link>
          </nav>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
