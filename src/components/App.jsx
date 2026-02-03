import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import EnterUserData from './EnterUserData'
import HomePage from './HomePage'
import UsersHistoryList from './UsersHistoryList/UsersHistoryList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/formdata" element={<EnterUserData />} />
        <Route path="/history" element={<UsersHistoryList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
