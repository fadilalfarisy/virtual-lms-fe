import { useNavigate } from "react-router-dom"
import axios from "axios"
import { setAccessToken } from "../services/tokenService"

function Dashboard() {
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
      <h1>WELCOME</h1>

      <button
        className="bg-[#01A84D] rounded-xl text-white p-2 hover:scale-105 duration-300"
        onClick={() => verifyAuth()}>
        get list user
      </button>

      <button
        className="bg-[#ff0000] rounded-xl text-white p-2 hover:scale-105 duration-300"
        onClick={() => logout()}>
        logout
      </button>

      <button
        className="bg-[#ff0000] rounded-xl text-white p-2 hover:scale-105 duration-300"
        onClick={() => refresh()}>
        logout
      </button>
    </>
  )
}

export default Dashboard