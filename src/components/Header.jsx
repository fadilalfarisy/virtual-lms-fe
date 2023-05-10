import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [isCollapse, setCollapse] = useState(false)

  const useToogle = () => {
    setCollapse(!isCollapse)
  }

  const activeNavbar = ({ isActive }) => isActive ? 'text-[#399F89]' : 'text-[#818181] hover:text-[#399F89]'

  const location = useLocation()
  if (location.pathname === '/login' || location.pathname == '/register') {
    return (<></>)
  }

  return (
    <>
      <header className="bg-[#F5F5F5]">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div className="flex flex-col justify-content items-center py-2">
            <NavLink to='/'>
              <img className="w-56 cursor-pointer" src='/assets/logo.svg' alt="..." />
            </NavLink>
            {/* <h1 className="text-3xl font-bold text-[#01A84D]">Digsboard</h1>
            <p className="text-xs">Virtual Content Learning Management</p> */}
          </div>
          <div
            className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isCollapse ? 'top-[10%]' : ''}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-[#818181]">
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
            <NavLink className="w-24 text-[#818181] hover:text-[#399F89] text-xs" to='/login'>Anda seorang Dosen?</NavLink>
            {/* <Link to='/login' className="bg-[#399F89] text-white px-4 py-1 rounded-full">Sign in</Link> */}
            <i className="text-2xl cursor-pointer md:hidden" onClick={useToogle}>{isCollapse ? <FaTimes /> : <FaBars />}</i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header