import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import NotePage from './pages/NotePage/NotePage'

function App() {
  console.count('App render')

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/note/:noteId' element={<NotePage />} />
      </Routes>
    </>
  )
}

export default App
