import './UsersHistoryList.scss'
import { USER_DATA } from '../../constans'
import useLocaleStorage from '../../hooks/useLocalStorage'
import UserHistoryItem from '../UserHistoryItem/UserHistoryItem'
import { useState } from 'react'
import Calculator from '../Calculator/Calculator'

const UsersHistoryList = () => {
  const [dataList, setDataList] = useLocaleStorage(USER_DATA)
  const [isShowModal, setIsShowModal] = useState(false)
  const [activeItemId, setActiveItemId] = useState()
  const [dataCalc, setDataCalc] = useState([])
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [activeItemIdDelete, setActiveItemIdDelete] = useState()

  const handleAcceptItem = (data) => {
    setActiveItemId(data.id)
    setIsShowModal(true)
    setDataCalc(() => Calculator.calculate(data))
  }

  const toggleModal = (itemId) => {
    if (activeItemId === itemId) {
      setIsShowModal(!isShowModal)
    } else {
      setActiveItemId(itemId)
      setIsShowModal(true)
    }
  }

  const toggleModalDelete = (itemId) => {
    if (activeItemIdDelete === itemId) {
      setIsShowModalDelete(!isShowModalDelete)
    } else {
      setActiveItemIdDelete(itemId)
      setIsShowModalDelete(true)
    }
  }

  const handleDelete = (data) => {
    setActiveItemIdDelete(data.id)
    setIsShowModalDelete(true)
  }

  const recordDelete = (id) => {
    setDataList((prevState) => prevState.filter((dat) => dat.id !== id))
  }

  return (
    <div className="history-container">
      <h1 className="history-h1">Данные пользователей</h1>
      {dataList.length !== 0 ? (
        <ul>
          {dataList.map((data) => (
            <UserHistoryItem
              key={data.id}
              data={data}
              handleAccept={() => handleAcceptItem(data)}
              handleDelete={() => handleDelete(data)}
              isShowModal={isShowModal && activeItemId === data.id}
              isShowModalDelete={
                isShowModalDelete && activeItemIdDelete === data.id
              }
              toggleModal={() => toggleModal(data.id)}
              toggleModalDelete={() => toggleModalDelete(data.id)}
              handleRecordDelete={() => recordDelete(data.id)}
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
