import { Outlet } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import styles from './Layout.module.css'
import bgImage from '../images/funart.jpg'

function Layout() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
