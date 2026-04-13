import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import heroBg from '../../assets/hero-bg.png'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col" style={{ backgroundColor: '#0f172a' }}>
      {/* Global background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover opacity-30 pointer-events-none"
      />

      {/* Skip to content link - first focusable element for keyboard users */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
