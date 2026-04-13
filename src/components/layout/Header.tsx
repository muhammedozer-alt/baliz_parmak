import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoImg from '../../assets/logo.png'
import { useAuthStore } from '../../stores/authStore'

const staticNavItems = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/duyurular', label: 'Duyurular' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/yonetim', label: 'Yönetim Kadromuz' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const user = useAuthStore((s) => s.user)
  const isInitialized = useAuthStore((s) => s.isInitialized)
  const logout = useAuthStore((s) => s.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    staticNavItems[0],
    { to: user ? '/kutuphane/panel' : '/kutuphane', label: 'Ozan Bayır Kütüphanesi' },
    ...staticNavItems.slice(1),
  ]

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10"
      style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Baliz Parmak Ana Sayfa"
          >
            <img
              src={logoImg}
              alt="BalİZ Parmak Kulübü Logo"
              className="h-24 w-auto object-contain"
            />
            <span className="text-lg font-bold text-white hidden sm:block">
              BALİZ PARMAK KULÜBÜ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Ana navigasyon" className="hidden xl:block">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              {!isInitialized ? null : user ? (
                <li className="flex items-center gap-2 ml-2">
                  <span className="text-sm text-amber-400 font-medium">{user.name}</span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Çıkış
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/giris"
                      className="ml-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      Giriş Yap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/kayit"
                      className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
                    >
                      Kayıt Ol
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="xl:hidden rounded-lg p-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobil navigasyon"
          className="xl:hidden border-t border-white/10"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <ul className="list-none m-0 p-0 px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {!isInitialized ? null : user ? (
              <li className="flex items-center justify-between px-3 py-2.5">
                <span className="text-sm text-amber-400 font-medium">{user.name}</span>
                <button
                  type="button"
                  onClick={() => { handleLogout(); setMobileMenuOpen(false) }}
                  className="rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Çıkış
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/giris"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg border border-white/20 px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Giriş Yap
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/kayit"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg bg-amber-500 px-3 py-2.5 text-sm font-semibold text-white hover:bg-amber-400 transition-colors"
                  >
                    Kayıt Ol
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
