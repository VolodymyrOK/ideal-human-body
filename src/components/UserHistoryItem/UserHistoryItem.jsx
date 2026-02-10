import Result from '../Result'
import Modal from '../Modal'
import Button from '../Button'
import './UserHistoryItem.scss'
import GetDataLanguage from '../../hooks/GetDataLanguage'

const UserHistoryItem = ({
  data,
  handleAccept,
  handleDelete,
  dataCalc,
  isShowModal,
  toggleModal,
  toggleModalDelete,
  isShowModalDelete,
  handleRecordDelete,
  lang,
}) => {
  const {
    nameResult,
    weightHistory,
    heightHistory,
    formAge,
    formMale,
    formFemale,
    dateResult,
    timeResult,
    formGender,
    repeatData,
    deleteData,
    btnDelete,
    btnCancel,
    btnClose,
  } = GetDataLanguage(lang) || {}

  return (
    <>
      <li className="list-item">
        <div className="data-line span-line">
          <span className="title-line">{nameResult}</span>
          <span className="class-name">{data.name}</span>
        </div>
        <div className="data-line span-line">
          <span className="title-line">{weightHistory}</span>
          <span className="class-weight">{data.weight}</span>
        </div>
        <div className="data-line span-line">
          <span className="title-line">{heightHistory}</span>
          <span className="class-height">{data.height}</span>
        </div>
        <div className="data-line span-line">
          <span className="title-line">{formAge}</span>
          <span className="class-age">{data.age}</span>
        </div>
        <div className="data-line span-line">
          <span className="title-line">{formGender}</span>
          <span className="class-gender">
            {data.gender === 'male' ? `${formMale}` : `${formFemale}`}
          </span>
        </div>
        <div className="data-line time span-line">
          <span className="title-line">
            {dateResult}/{timeResult}
          </span>
          <span className="class-data">{data.date}</span>
          <span className="class-data">{data.time}</span>
        </div>
        <div>
          <button
            type="button"
            className="button button-ok"
            title={`${repeatData} ${data.name}`}
            onClick={handleAccept}
          >
            ✔
          </button>
        </div>
        <div>
          <button
            type="button"
            className="button button-del"
            title={`${deleteData} - ${data.name}`}
            onClick={handleDelete}
          >
            ✖
          </button>
        </div>
      </li>
      {isShowModalDelete && (
        <div>
          <Modal onClose={toggleModalDelete}>
            <div className="btn-block-delete">
              <Button onClick={handleRecordDelete}>
                {btnDelete} {data.name}
              </Button>
              <Button onClick={toggleModalDelete}>{btnCancel}</Button>
            </div>
          </Modal>
        </div>
      )}
      {isShowModal && (
        <div>
          <Modal onClose={toggleModal}>
            <Result result={dataCalc} lang={lang} />
            <Button onClick={toggleModal}>{btnClose}</Button>
          </Modal>
        </div>
      )}
    </>
  )
}

export default UserHistoryItem
