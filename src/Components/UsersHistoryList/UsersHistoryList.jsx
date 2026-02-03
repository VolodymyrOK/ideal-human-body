import './UsersHistoryList.scss'
import { USER_DATA } from '../../constans'
import useLocaleStorage from '../../hooks/useLocalStorage'
import UserHistoryItem from '../UserHistoryItem/UserHistoryItem'
import { useState } from 'react'
import Calculator from '../Calculator/Calculator'

const UsersHistoryList = () => {
  const [dataList, setDataList] = useLocaleStorage(USER_DATA)
  const [isShowModal, setIsShowModal] = useState(false)
  const [dataCalc, setDataCalc] = useState([])

  const handleAccept = (data) => {
    setDataCalc(() => Calculator.calculate(data))
    toggleModal()
  }

  const toggleModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const handleDelete = (id) => {
    setDataList((prevState) => prevState.filter((dat) => dat.id !== id))
  }

  return (
    <div className="history-container">
      <h1>Данные пользователей</h1>
      {dataList.length !== 0 ? (
        <ul>
          {dataList.map((data) => (
            <UserHistoryItem
              key={data.id}
              data={data}
              handleAccept={() => handleAccept(data)}
              handleDelete={() => handleDelete(data.id)}
              isShowModal={isShowModal}
              toggleModal={toggleModal}
              dataCalc={dataCalc}
            />
          ))}
        </ul>
      ) : (
        <div className="data-null">
          <p>Нет данных</p>
        </div>
      )}
    </div>
  )
}

export default UsersHistoryList
