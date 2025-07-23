import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Timeline from './components/Timeline'
import Archive from './components/Archive'
import Testimonials from './components/Testimonials'
import ThematicPages from './components/ThematicPages'
import Administration from './components/Administration'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleGetStarted = () => {
    setCurrentPage('dashboard')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />
      case 'dashboard':
        return (
          <Layout currentPage="dashboard">
            <Dashboard />
          </Layout>
        )
      case 'timeline':
        return (
          <Layout currentPage="timeline">
            <Timeline />
          </Layout>
        )
      case 'archive':
        return (
          <Layout currentPage="archive">
            <Archive />
          </Layout>
        )
      case 'testimonials':
        return (
          <Layout currentPage="testimonials">
            <Testimonials />
          </Layout>
        )
      case 'pages':
        return (
          <Layout currentPage="pages">
            <ThematicPages />
          </Layout>
        )
      case 'admin':
        return (
          <Layout currentPage="admin">
            <Administration />
          </Layout>
        )
      default:
        return <LandingPage onGetStarted={handleGetStarted} />
    }
  }

  // Handle navigation from sidebar
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      const validPages = ['dashboard', 'timeline', 'archive', 'testimonials', 'pages', 'admin']
      if (validPages.includes(hash)) {
        setCurrentPage(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return renderPage()
}

export default App
