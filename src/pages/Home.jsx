import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setAccessToken } from "../services/tokenService"

function Home() {
  const navigate = useNavigate()

  const verifyAuth = async () => {
    try {
      const { data } = await axios.get('/users')
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    const { data } = await axios.get('/logout', { withCredentials: true })
    console.log(data.data)
    setAccessToken('')
    navigate('/')
  }

  const refresh = async () => {
    const { data } = await axios.get('/token', { withCredentials: true })
    console.log(data.data)
  }

  return (
    <>
      <h1 className="text-center">WELCOME</h1>
    </>
  )
}

export default Home