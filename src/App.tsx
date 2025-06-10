import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Project from './pages/Project'
import BuildLog from './pages/BuildLog'
import ProjectBuildLog from './pages/ProjectBuildLog'

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

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

// Google Analytics Page Tracking
const TrackPageViews: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TrackPageViews />
      <ScrollToTop>
        {/* all pages */}
        <div className="min-h-screen flex flex-col bg-[#010102]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/build-log" element={<BuildLog />} />
            <Route path="/projects/:slug/buildlog" element={<ProjectBuildLog />} />
          </Routes>
        </div>
      </ScrollToTop>
    </Router >
  )
}

export default App
