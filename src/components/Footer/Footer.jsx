import styles from './Footer.module.css'

const Footer = () => {
  return <div className={styles.footer}>© {new Date().getUTCFullYear()}</div>
}

export default Footer
