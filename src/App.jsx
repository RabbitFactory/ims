import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './Layouts/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </>
  )
}

export default App
