import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { getAccessToken, setAccessToken } from "../services/tokenService"
import { AppContext } from "../App";

function Header() {
  const [isCollapse, setCollapse] = useState(false)
  const { loggedStatus, setLoggedStatus } = useContext(AppContext)

  const useToogle = () => {
    setCollapse(!isCollapse)
  }

  useEffect(() => {
    console.log({ 'status logged': loggedStatus })
    if (getAccessToken() != '' && getAccessToken() != 'undefined') {
      setLoggedStatus(true)
    }
  })


  const activeNavbar = ({ isActive }) => isActive ? 'text-[#399F89] font-[Poppins]' : 'font-[Poppins] text-[#818181] hover:text-[#399F89]'

  const logout = async () => {
    try {
      await axios.get('/user/logout')
      setLoggedStatus(false)
      setAccessToken('')

    } catch (error) {
      console.log(error)
    }
  }

  // const activeUser = () => {
  //   if (getAccessToken() != '') {
  //     return <button
  //       type="submit"
  //       className="bg-[#01A84D] rounded-xl text-white px-3 py-2"
  //       onClick={logout}
  //     >Logout</button>
  //   }
  //   return <NavLink className="w-24 text-[#818181] hover:text-[#399F89] text-sm" to='/login'>Anda seorang Dosen?</NavLink>
  // }

  const location = useLocation()
  if (location.pathname === '/login' || location.pathname == '/register') {
    return (<></>)
  }

  return (
    <>
      <header className="bg-[#F5F5F5] fixed z-50 w-full h-16">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div className="flex flex-col justify-content items-center py-2">
            <NavLink to='/' >
              <img className="w-40 cursor-pointer" src='/assets/logo.svg' alt="..." />
            </NavLink>
          </div>
          <div
            className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isCollapse ? 'top-[10%]' : ''}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-[#818181] text-md">
              <li>
                <NavLink className={activeNavbar} to="/">Beranda</NavLink>
              </li>
              <li>
                <NavLink className={activeNavbar} to="/class">Kelas</NavLink>
              </li>
              <li>
                <NavLink className={activeNavbar} to="/about">Tentang Kami</NavLink>
              </li>
              <li>
                <NavLink className={activeNavbar} to="/help">Hubungi Kami</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            {
              loggedStatus ?
                <button
                  type="submit"
                  className="bg-white rounded-xl text-[#399F89] px-3 py-2"
                  onClick={logout}
                >Logout</button> :
                <NavLink className="w-24 text-[#818181] hover:text-[#399F89] text-xs" to='/login'>Anda seorang Dosen?</NavLink>
            }
            <i className="text-2xl cursor-pointer md:hidden" onClick={useToogle}>{isCollapse ? <FaTimes /> : <FaBars />}</i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header