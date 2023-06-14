import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { setAccessToken } from "../services/tokenService"
import { FaChevronLeft } from 'react-icons/fa'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/user/login', {
        email,
        password
      }, {
        withCredentials: 'include'
      })
      setAccessToken(data.data[0].accessToken)
      navigate('/class')

    } catch (error) {
      if (error.response?.status === 404) {
        return setErrMsg('Email belum terdaftar');
      }
      if (error.response?.status === 400) {
        return setErrMsg('Kata sandi tidak sesuai');
      }
      return setErrMsg('Gagal masuk')
    }
  }

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative">
          <Link to={'/'}>
            <FaChevronLeft className="absolute top-6 left-6 text-[#399F89]" />
          </Link>
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#399F89]">Haloo!</h2>
            <p className="text-m mt-4 text-[#399F89]">Selamat datang kembali</p>

            <form onSubmit={login} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email" name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Kata sandi"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                  onClick={() => setVisiblePassword(!visiblePassword)}>
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <p className="text-xs flex items-center justify-center text-[#880808]">{errMsg != "" ? errMsg : ""}</p>
              <button className="bg-[#01A84D] rounded-xl text-white py-2 hover:scale-105 duration-300">Masuk</button>
            </form>

            <div className="mt-3 text-xs flex justify-between items-center text-[#399F89]">
              <p>Belum punya akun?</p>
              <Link to='/register'>
                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Daftar</button>
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80" alt='login-bg' />
          </div>
        </div>
      </section>
    </>
  )
}
export default Login