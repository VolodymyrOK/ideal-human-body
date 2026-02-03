import Result from '../Result'
import Modal from '../Modal'
import Button from '../Button'
import './UserHistoryItem.scss'

const UserHistoryItem = ({
  data,
  handleAccept,
  handleDelete,
  dataCalc,
  isShowModal,
  toggleModal,
}) => {
  console.log('dataCalc', dataCalc)
  return (
    <>
      <li className="list-item">
        <div className="data-line">
          <span className="title-line">Имя:</span>
          <span className="class-name">{data.name}</span>
        </div>
        <div className="data-line">
          <span className="title-line">Вес:</span>
          <span className="class-weight">{data.weight}</span>
        </div>
        <div className="data-line">
          <span className="title-line">Рост:</span>
          <span className="class-height">{data.height}</span>
        </div>
        <div className="data-line">
          <span className="title-line">Возраст:</span>
          <span className="class-age">{data.age}</span>
        </div>
        <div className="data-line">
          <span className="title-line">Пол:</span>
          <span className="class-gender">
            {data.gender === 'male' ? 'муж.' : 'жен.'}
          </span>
        </div>
        <div className="data-line time">
          <span className="title-line">Дата/Время</span>
          <span className="class-data">{data.date}</span>
          <span className="class-data">{data.time}</span>
        </div>
        <div>
          <button
            type="button"
            className="button button-ok"
            title={`Повторить расчёт для ${data.name}`}
            onClick={() => handleAccept(data)}
          >
            ✔
          </button>
        </div>
        <div>
          <button
            type="button"
            className="button button-del"
            title={`Удалить данные - ${data.name}`}
            onClick={handleDelete}
          >
            ✖
          </button>
        </div>
      </li>
      {isShowModal && (
        <div>
          <Modal onClose={toggleModal}>
            <Result result={dataCalc} />
            <Button onClick={toggleModal}>Закрыть</Button>
          </Modal>
        </div>
      )}
    </>
  )
}

export default UserHistoryItem
