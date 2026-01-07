import { Component } from 'react'
import UserHistoryItem from '../UserHistoryItem'
import './UsersHistoryList.scss'
import { USER_DATA } from '../../constans'

class UsersHistoryList extends Component {
  loadDataFromLocalStorage = () => {
    const prevDataUsers = JSON.parse(localStorage.getItem(USER_DATA) || '[]')
    this.setState({ dataList: prevDataUsers })
  }

  render() {
    const {
      toggleModalResult,
      dataList,
      handleAccept,
      handleDelete,
      isShowModalResult,
      dataCalc,
    } = this.props

    return (
      <div className="modal-body">
        <h1>Данные пользователей</h1>
        {dataList.length !== 0 ? (
          <ul>
            {dataList.map((data) => (
              <UserHistoryItem
                key={data.id}
                data={data}
                handleAccept={() => handleAccept(data)}
                handleDelete={() => handleDelete(data.id)}
                dataCalc={dataCalc}
                toggleModalResult={toggleModalResult}
                isShowModalResult={isShowModalResult}
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
}

export default UsersHistoryList
