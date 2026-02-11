import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import GetDataLanguage from '../../hooks/GetDataLanguage'
import 'flag-icons/css/flag-icons.min.css'

function Navigation({ lang, handleLangChange }) {
  const { navFormdata, navHistory, navUsersdata } = GetDataLanguage(lang) || {}
  return (
    <div className={styles.navContainer}>
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
      <nav className={styles.btnCountry} id="btn-country">
        <span
          className="fi fi-ua"
          onClick={() => handleLangChange('uk')}
          title="Українська"
        ></span>
        <span
          className="fi fi-gb"
          onClick={() => handleLangChange('en')}
          title="English"
        ></span>
        <span
          className="fi fi-de"
          onClick={() => handleLangChange('de')}
          title="Deutsch"
        ></span>
        <span
          className="fi fi-ru"
          onClick={() => handleLangChange('ru')}
          title="Русский"
        ></span>
        <span
          className="fi fi-pl"
          onClick={() => handleLangChange('pl')}
          title="Polski"
        ></span>
        <span
          className="fi fi-cz"
          onClick={() => handleLangChange('cz')}
          title="Čeština"
        ></span>
        <span
          className="fi fi-fr"
          onClick={() => handleLangChange('fr')}
          title="Français"
        ></span>
        <span
          className="fi fi-es"
          onClick={() => handleLangChange('es')}
          title="Español"
        ></span>
        <span
          className="fi fi-ro"
          onClick={() => handleLangChange('ro')}
          title="Română"
        ></span>
      </nav>
    </div>
  )
}

export default memo(Navigation)
