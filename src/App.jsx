import { Routes, Route } from 'react-router-dom'
import Notfound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Callme from './pages/Callme'
import Class from './pages/Class'
import About from './pages/About'
import { createContext, useState } from 'react'

export const AppContext = createContext()

function App() {
  const [videos, setVideos] = useState([])
  const [detailVideo, setDetailVideo] = useState({})
  const [loggedStatus, setLoggedStatus] = useState(false)


  return (
    <>
      <AppContext.Provider value={{ videos, setVideos, detailVideo, setDetailVideo, loggedStatus, setLoggedStatus }}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/class' element={<Class />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/help' element={<Callme />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>

  )
}

export default App
