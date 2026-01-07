import '../../index.css'
import Button from '../Button'
import './MainPage.scss'

const MainPage = ({ toggleUserData, toggleMainPage, toggleModal }) => {
  return (
    <div className="mainpage-container">
      <h1>
        Вычисление идеальных антропометрических характеристик тела человека
      </h1>
      <div className="btn-container">
        <Button
          onClick={() => {
            toggleUserData()
            toggleMainPage()
          }}
        >
          Исходные данные
        </Button>
        <Button
          onClick={() => {
            toggleModal()
          }}
        >
          История пользователей
        </Button>
      </div>
    </div>
  )
}

export default MainPage
