import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.norm)}
      >
        Home
      </NavLink>
      <NavLink
        to="/formdata"
        className={({ isActive }) => (isActive ? styles.active : styles.norm)}
      >
        Исходные данные
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? styles.active : styles.norm)}
      >
        История пользователей
      </NavLink>
      <NavLink
        to="/usersdata"
        className={({ isActive }) => (isActive ? styles.active : styles.norm)}
      >
        Данные пользователей
      </NavLink>
    </nav>
  )
}

export default memo(Navigation)
