import '../../index.css'
import './HomePage.scss'
import GetDataLanguage from '../../hooks/GetDataLanguage'

const HomePage = ({ lang }) => {
  const { h1Home } = GetDataLanguage(lang) || {}

  return (
    <div className="homepage-container">
      <h1 className="home-page-h1">{h1Home}</h1>
    </div>
  )
}

export default HomePage
