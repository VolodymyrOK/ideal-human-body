import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import EnterUserData from './EnterUserData'
import HomePage from './HomePage'
import UsersHistoryList from './UsersHistoryList/UsersHistoryList'
import { useState } from 'react'
import * as dataLang from '../language/languageData'

function App() {
  const [lang, setLang] = useState(dataLang.langDefault)

  const handleLangChange = (newLang) => {
    setLang(newLang)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout lang={lang} handleLangChange={handleLangChange} />}
      >
        <Route index element={<HomePage lang={lang} />} />
        <Route path="/formdata" element={<EnterUserData lang={lang} />} />
        <Route path="/history" element={<UsersHistoryList lang={lang} />} />
        <Route path="*" element={<NotFoundPage lang={lang} />} />
      </Route>
    </Routes>
  )
}

export default App
