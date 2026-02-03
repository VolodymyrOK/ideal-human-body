import Button from '../Button'
import './Result.scss'

const Result = ({ result, returnEnterData, userData }) => {
  console.log('result', result)
  const {
    name,
    idealMass,
    fatPercentage,
    fatKg,
    water,
    bodyDensity,
    bodyVolume,
    skinArea,
    time,
    date,
    weight,
    height,
    age,
    gender,
  } = result
  return (
    <div className="result">
      <h2>Результаты расчета</h2>
      <div className="container-result">
        <div className="data-start">
          <p className="line-result">
            <span>Имя:</span>
            <span>{name}</span>
          </p>
          <p className="line-result">
            <span>Фактический вес, кг:</span>
            <span>{weight} кг</span>
          </p>
          <p className="line-result">
            <span>Фактический рост, см:</span>
            <span>{height} см</span>
          </p>
          <p className="line-result">
            <span>Возраст:</span>
            <span>{age} лет</span>
          </p>
          <p className="line-result">
            <span>Пол:</span>
            <span>{gender === 'male' ? 'мужской' : 'женский'}</span>
          </p>
          <p className="line-result">
            <span>Дата:</span>
            <span>{date}</span>
          </p>
          <p className="line-result">
            <span>Время:</span>
            <span>{time}</span>
          </p>
        </div>
        <div className="data-result">
          <p className="line-result">
            <span>Идеальная масса тела:</span>
            <span>{idealMass.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Процент жира:</span>
            <span>{fatPercentage.toFixed(2)} %</span>
          </p>
          <p className="line-result">
            <span>Масса жира:</span>
            <span>{fatKg.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Масса воды:</span>
            <span>{water.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Плотность тела:</span>
            <span>{bodyDensity.toFixed(2)} г/см³</span>
          </p>
          <p className="line-result">
            <span>Объем тела:</span>
            <span>{bodyVolume.toFixed(2)} м³</span>
          </p>
          <p className="line-result">
            <span>Площадь кожи:</span>
            <span>{skinArea.toFixed(2)} м²</span>
          </p>
        </div>
      </div>
      {userData && (
        <Button type="button" onClick={returnEnterData}>
          Вернуться к вводу данных
        </Button>
      )}
    </div>
  )
}

export default Result
