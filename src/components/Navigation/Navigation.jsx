import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import GetDataLanguage from '../../hooks/GetDataLanguage'
import 'flag-icons/css/flag-icons.min.css'

function Navigation({ lang, handleLangChange }) {
  const { navFormdata, navHistory, navUsersdata } = GetDataLanguage(lang) || {}
  return (
    <div class={styles.navContainer}>
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
          {navFormdata}
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? styles.active : styles.norm)}
        >
          {navHistory}
        </NavLink>
        <NavLink
          to="/usersdata"
          className={({ isActive }) => (isActive ? styles.active : styles.norm)}
        >
          {navUsersdata}
        </NavLink>
      </nav>
      <div class={styles.btnCountry}>
        <span
          class="fi fi-ru"
          onClick={() => handleLangChange('ru')}
          title="Русский"
        ></span>
        <span
          class="fi fi-gb"
          onClick={() => handleLangChange('en')}
          title="English"
        ></span>
        <span
          class="fi fi-de"
          onClick={() => handleLangChange('de')}
          title="Deutsch"
        ></span>
      </div>
    </div>
  )
}

export default memo(Navigation)
