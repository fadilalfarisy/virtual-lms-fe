import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../hooks/userContext"
import axios from "axios"
import { setAccessToken } from "../services/tokenService"

function Dashboard() {
  const { userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (Object.keys(userInfo).length == 0) {
  //     navigate('/')
  //   }
  // }, [])

  const verifyAuth = async () => {
    try {
      const { data } = await axios.get('/users')
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    setAccessToken('')
  }

  console.log(userInfo)
  return (
    <>
      <h1>WELCOME</h1>
      <h1>{userInfo.email}</h1>

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
    </>
  )
}

export default Dashboard