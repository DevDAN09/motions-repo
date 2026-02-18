import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Test1Page from './pages/Test1Page'
import GesturePage from './pages/Gesture'
import LayoutPage from './pages/Layout'
import PlanDashboardPage from './pages/PlanDashboard'
import { useI18n } from './i18n/I18nContext'

const navItems = [
  { to: '/', labelKey: 'app.nav.dashboard' },
  { to: '/test1', labelKey: 'app.nav.test1' },
  { to: '/gesture', labelKey: 'app.nav.gesture' },
  { to: '/layout', labelKey: 'app.nav.layout' },
]

const Navigation = () => {
  const location = useLocation()
  const { locale, setLocale, t } = useI18n()

  return (
    <header className="sticky top-0 z-20 border-b border-slate-700/50 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{t('app.brand.subtitle')}</p>
          <h1 className="text-lg font-semibold text-slate-100">{t('app.brand.title')}</h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 rounded-full bg-slate-800/80 p-1">
            <span className="px-2 text-xs font-medium text-slate-300">{t('app.language')}</span>
            {(['ko', 'en'] as const).map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLocale(language)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  locale === language ? 'bg-cyan-300 text-slate-950' : 'bg-slate-700 text-slate-200'
                }`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
          <nav>
            <ul className="flex flex-wrap items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to

                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`rounded-full px-4 py-2 text-sm transition ${
                        isActive
                          ? 'bg-cyan-300 text-slate-950'
                          : 'bg-slate-800/80 text-slate-200 hover:bg-slate-700'
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<PlanDashboardPage />} />
          <Route path="/test1" element={<Test1Page />} />
          <Route path="/gesture" element={<GesturePage />} />
          <Route path="/layout" element={<LayoutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
