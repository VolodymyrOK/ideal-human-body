import './Result.scss'

const Result = ({ result, userData }) => {
  return (
    <div className="result">
      <h2>Результаты расчета</h2>
      <div className="container-result">
        <div className="data-start">
          <p className="line-result">
            <span>Имя:</span>
            <span>{result.name ? result.name : userData.name}</span>
          </p>
          <p className="line-result">
            <span>Фактический вес, кг:</span>
            <span>{result.weight ? result.weight : userData.weight} кг</span>
          </p>
          <p className="line-result">
            <span>Фактический рост, см:</span>
            <span>{result.height ? result.height : userData.height} см</span>
          </p>
          <p className="line-result">
            <span>Возраст:</span>
            <span>{result.age ? result.age : userData.age} лет</span>
          </p>
          <p className="line-result">
            <span>Пол:</span>
            <span>
              {result.gender
                ? result.gender === 'male'
                  ? 'мужской'
                  : 'женский'
                : userData.gender === 'male'
                ? 'мужской'
                : 'женский'}
            </span>
          </p>
          <p className="line-result">
            <span>Дата:</span>
            <span>{result.date ? result.date : userData.date}</span>
          </p>
          <p className="line-result">
            <span>Время:</span>
            <span>{result.time ? result.time : userData.time}</span>
          </p>
        </div>
        <div className="data-result">
          <p className="line-result">
            <span>Идеальная масса тела:</span>
            <span>{result.idealMass.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Процент жира:</span>
            <span>{result.fatPercentage.toFixed(2)} %</span>
          </p>
          <p className="line-result">
            <span>Масса жира:</span>
            <span>{result.fatKg.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Масса воды:</span>
            <span>{result.water.toFixed(2)} кг</span>
          </p>
          <p className="line-result">
            <span>Плотность тела:</span>
            <span>{result.bodyDensity.toFixed(2)} г/см³</span>
          </p>
          <p className="line-result">
            <span>Объем тела:</span>
            <span>{result.bodyVolume.toFixed(2)} м³</span>
          </p>
          <p className="line-result">
            <span>Площадь кожи:</span>
            <span>{result.skinArea.toFixed(2)} м²</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Result
