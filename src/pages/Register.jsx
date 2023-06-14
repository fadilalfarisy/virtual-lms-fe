import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import * as Yup from 'yup'
import { useFormik } from "formik"
import axios from "axios"
import { setAccessToken } from "../services/tokenService"
import { FaChevronLeft } from 'react-icons/fa'

function Register() {

  const [visiblePassword, setVisiblePassword] = useState(false)
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false)

  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Nama awal harus kurang dari 20 huruf")
        .min(3, "Nama awal harus lebih dari 3 huruf")
        .required("Nama awal harus diisi"),
      lastName: Yup.string()
        .max(20, "Nama akhir harus kurang dari 20 huruf")
        .min(3, "Nama akhir harus lebih dari 3 huruf")
        .required("Nama akhir harus diisi"),
      email: Yup.string()
        .email("Alamat email tidak valid")
        .required("Email harus diisi"),
      password: Yup.string()
        .min(5, "Password harus lebih dari 5 karakter")
        .required("Password harus diisi")
        .matches(
          /^(?=.*[a-z])/,
          "Password harus memiliki minimal satu huruf kecil"
        )
        .matches(
          /^(?=.*[A-Z])/,
          "Password harus memiliki minimal satu huruf besar"
        )
        .matches(
          /^(?=.*[0-9])/,
          "Password harus memiliki minimal satu angka"
        )
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          "Password harus memiliki minimal satu special karakter"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Konfirmasi password tidak sesuai')
        .required("Konfirmasi password harus diisi"),
    }),

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('/user/register', {
          fullName: `${values.firstName} ${values.lastName}`,
          email: values.email,
          password: values.password,
        }, {
          withCredentials: 'include'
        })
        setAccessToken(data.data[0].accessToken)
        navigate('/class')
      } catch (error) {
        if (error.response?.status === 400) {
          setErrMsg('Email sudah terdaftar');
        } else {
          setErrMsg('Pendaftaran gagal')
        }
        console.log(error)
      }
    },
  });

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative">
        <Link to={'/'}>
          <FaChevronLeft className="absolute top-6 left-6 text-[#399F89]" />
        </Link>
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#399F89]">Daftar yuk!</h2>
          <p className="text-xs mt-4 text-[#399F89]">Masukkan data kamu dengan benar ya...</p>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                placeholder="Nama depan"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName.trim()}
                onBlur={formik.handleBlur} />
              <p className="pl-2 text-xs text-red-400">{formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : ""}</p>
            </div>

            <div className="flex flex-col">
              <input
                className="p-2 rounded-xl border"
                type="text"
                placeholder="Nama belakang"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur} />
              <p className="pl-2 text-xs text-red-400">{formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : ""}</p>
            </div>

            <div className="flex flex-col">
              <input
                className="p-2 rounded-xl border"
                type="text"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur} />
              <p className="pl-2 text-xs text-red-400">{formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}</p>
            </div>
            <div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Kata sandi"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur} />
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
              <p className="pl-2 text-xs text-red-400">{formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}</p>
            </div>
            <div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={visibleConfirmPassword ? "text" : "password"}
                  placeholder="Konfirmasi kata sandi"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                  onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}>
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <p className="pl-2 text-xs text-red-400">{formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}</p>
            </div>
            <p className="text-xs flex items-center justify-center text-red-400">{errMsg != "" ? errMsg : ""}</p>
            <button
              className="bg-[#01A84D] rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
            >Daftar</button>
          </form>

          <div className="mt-3 text-xs flex justify-between items-center text-[#399F89]">
            <p>Sudah punya akun?</p>
            <Link to='/'>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Masuk</button>
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt='register-bg' />
        </div>
      </div>
    </section>
  )
}

export default Register