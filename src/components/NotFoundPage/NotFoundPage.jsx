import errorImage from '../../images/404.gif'
import styles from './NotFoundPage.module.css'

export const NotFoundPage = () => {
  return (
    <div>
      <div className={styles.notFoundContainer}>
        <h1>404 - Страница не найдена</h1>
        <img src={errorImage} alt="errorImage" width="350" />
      </div>
    </div>
  )
}

export default NotFoundPage
