import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../hooks/userContext"

function Dashboard() {
  const { userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(userInfo).length == 0) {
      navigate('/')
    }
  }, [])

  console.log(userInfo)
  return (
    <>
      <h1>WELCOME</h1>
      <h1>{userInfo.email}</h1>
    </>
  )
}

export default Dashboard