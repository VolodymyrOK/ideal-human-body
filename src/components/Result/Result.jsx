import GetDataLanguage from '../../hooks/GetDataLanguage'
import Button from '../Button'
import './Result.scss'

const Result = ({ result, returnEnterData, userData, lang }) => {
  const {
    h2Result,
    nameResult,
    weightResult,
    heightResult,
    formAge,
    formGender,
    dateResult,
    timeResult,
    idealMassResult,
    fatPercentageResult,
    fatKgResult,
    waterResult,
    bodyDensityResult,
    bodyVolumeResult,
    skinAreaResult,
    returnDataEnter,
    maleResult,
    femaleResult,
    kg,
    cm,
    gcm,
    year,
  } = GetDataLanguage(lang) || {}
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
    <>
      <h2 className="h2-result">{h2Result}</h2>
      <div className="container-result">
        <div className="data-start">
          <p className="line-result">
            <span>{nameResult}</span>
            <span>{name}</span>
          </p>
          <p className="line-result">
            <span>{weightResult}</span>
            <span>
              {weight} {kg}
            </span>
          </p>
          <p className="line-result">
            <span>{heightResult}</span>
            <span>
              {height} {cm}
            </span>
          </p>
          <p className="line-result">
            <span>{formAge}</span>
            <span>
              {age} {year}
            </span>
          </p>
          <p className="line-result">
            <span>{formGender}</span>
            <span>
              {gender === 'male' ? `${maleResult}` : `${femaleResult}`}
            </span>
          </p>
          <p className="line-result">
            <span>{dateResult}</span>
            <span>{date}</span>
          </p>
          <p className="line-result">
            <span>{timeResult}</span>
            <span>{time}</span>
          </p>
        </div>
        <div className="data-result">
          <p className="line-result">
            <span>{idealMassResult}</span>
            <span>
              {idealMass.toFixed(2)} {kg}
            </span>
          </p>
          <p className="line-result">
            <span>{fatPercentageResult}</span>
            <span>{fatPercentage.toFixed(2)} %</span>
          </p>
          <p className="line-result">
            <span>{fatKgResult}</span>
            <span>
              {fatKg.toFixed(2)} {kg}
            </span>
          </p>
          <p className="line-result">
            <span>{waterResult}</span>
            <span>
              {water.toFixed(2)} {kg}
            </span>
          </p>
          <p className="line-result">
            <span>{bodyDensityResult}</span>
            <span>
              {bodyDensity.toFixed(2)} {gcm}
            </span>
          </p>
          <p className="line-result">
            <span>{bodyVolumeResult}</span>
            <span>{bodyVolume.toFixed(2)} м³</span>
          </p>
          <p className="line-result">
            <span>{skinAreaResult}</span>
            <span>{skinArea.toFixed(2)} м²</span>
          </p>
        </div>
      </div>
      {userData && (
        <Button type="button" onClick={returnEnterData}>
          {returnDataEnter}
        </Button>
      )}
    </>
  )
}

export default Result
