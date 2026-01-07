class Calculator {
  static calculate = ({ weight, height, age, gender }) => {
    let idealMass,
      fatPercentage,
      fatKg,
      water,
      bodyDensity,
      bodyVolume,
      skinArea
    if (gender === 'female') {
      idealMass = (+height * 3 - 450 + +age) * 0.225 + 40.5
      fatPercentage = ((+weight - idealMass) * 100) / +weight + 22
    } else {
      idealMass = (+height * 3 - 450 + +age) / 4 + 45
      fatPercentage = ((+weight - idealMass) * 100) / +weight + 15
    }
    fatKg = (+weight * fatPercentage) / 100
    water = 0.732 * idealMass
    bodyDensity = (0.89 * fatPercentage + 1.1 * (100 - fatPercentage)) / 100
    bodyVolume = +weight / (bodyDensity * 1000)
    let y = (35.75 - Math.log10(+weight)) / 53.2
    skinArea = (Math.pow(1000 * +weight, y) * Math.pow(+height, 0.3)) / 3118.2
    return {
      idealMass,
      fatPercentage,
      fatKg,
      water,
      bodyDensity,
      bodyVolume,
      skinArea,
    }
  }
}

export default Calculator
