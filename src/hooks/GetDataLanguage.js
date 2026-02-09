import { useEffect, useState } from 'react'
import * as dataLang from '../language/languageData'

const GetDataLanguage = (lang) => {
  const [filteredData, setFilteredData] = useState(null)

  useEffect(() => {
    const getFormData = () => {
      const filtered = dataLang.setLang.find((item) => item.language === lang)
      setFilteredData(filtered)
    }
    getFormData()
  }, [lang])

  return filteredData
}

export default GetDataLanguage
