import GetDataLanguage from '../../hooks/GetDataLanguage'
import errorImage from '../../images/404.gif'
import styles from './NotFoundPage.module.css'

export const NotFoundPage = ({ lang }) => {
  const { pageNotFound } = GetDataLanguage(lang) || {}

  return (
    <div>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.notFoundH1}>{pageNotFound}</h1>
        <img src={errorImage} alt="errorImage" />
      </div>
    </div>
  )
}

export default NotFoundPage
