import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileBottomBar } from './MobileBottomBar'

export function SiteLayout() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
