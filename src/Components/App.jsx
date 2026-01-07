import { Component } from 'react'
import UserData from './UserData'
import '../index.css'
import MainPage from './MainPage'
import { Footer, Header, Main } from './App.styled.js'
import Modal from './Modal'
import Button from './Button'
import UsersHistoryList from './UsersHistoryList/UsersHistoryList.jsx'
import { USER_DATA } from '../constans.js'
import Calculator from './Calculator/Calculator.jsx'
import bgImage from '../images/funart.jpg'

class App extends Component {
  data = JSON.parse(localStorage.getItem(USER_DATA) || '[]')

  state = {
    dataList: this.data,
    isShowUserData: false,
    isShowMainPage: true,
    isShowModal: false,
    isShowModalResult: false,
    dataCalc: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataList !== this.state.dataList) {
      localStorage.setItem(USER_DATA, JSON.stringify(this.state.dataList))
    }
  }

  updateDataList = (newData) => {
    this.setState((prevState) => ({
      dataList: [...prevState.dataList, newData],
    }))
  }

  updateDataCalc = (newData, data) => {
    this.setState({ dataCalc: { ...newData, ...data } })
  }

  handleAccept = (data) => {
    this.updateDataCalc(Calculator.calculate(data), data)
    this.toggleModalResult()
  }

  toggleModalResult = () => {
    this.setState(({ isShowModalResult }) => ({
      isShowModalResult: !isShowModalResult,
    }))
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      dataList: prevState.dataList.filter((data) => data.id !== id),
    }))
  }

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }))
  }

  toggleUserData = () => {
    this.setState(({ isShowUserData }) => ({
      isShowUserData: !isShowUserData,
    }))
  }
  toggleMainPage = () => {
    this.setState(({ isShowMainPage }) => ({
      isShowMainPage: !isShowMainPage,
    }))
  }

  render() {
    const { isShowUserData, isShowMainPage, isShowModal } = this.state

    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <div className="container">
          <Header>Проектик для тренировок (HTML, CSS, JS, REACT)</Header>
          <Main>
            {isShowMainPage && (
              <MainPage
                toggleUserData={this.toggleUserData}
                toggleMainPage={this.toggleMainPage}
                toggleModal={this.toggleModal}
              />
            )}
            {!isShowMainPage && isShowUserData && (
              <UserData
                toggleUserData={this.toggleUserData}
                toggleMainPage={this.toggleMainPage}
                updateDataList={this.updateDataList}
              />
            )}
            {isShowModal && (
              <Modal onClose={this.toggleModal}>
                {/*В компонент Modal передаётся информация в виде пропсов - this.props.children*/}
                <UsersHistoryList
                  dataList={this.state.dataList}
                  isShowModalResult={this.state.isShowModalResult}
                  dataCalc={this.state.dataCalc}
                  handleAccept={this.handleAccept}
                  handleDelete={this.handleDelete}
                  toggleModalResult={this.toggleModalResult}
                />
                <Button onClick={this.toggleModal}>Закрыть</Button>
              </Modal>
            )}
          </Main>
          <Footer>2025</Footer>
        </div>
      </div>
    )
  }
}

export default App
