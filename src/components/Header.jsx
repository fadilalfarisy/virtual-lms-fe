import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isCollapse, setCollapse] = useState(false)

  const useToogle = () => {
    setCollapse(!isCollapse)
  }

  return (
    <>
      <header className="bg-[#F5F5F5]">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div className="flex flex-col justify-content items-center py-2">
            <img className="w-56 cursor-pointer" src='/assets/logo.svg' alt="..." />
            {/* <h1 className="text-3xl font-bold text-[#01A84D]">Digsboard</h1>
            <p className="text-xs">Virtual Content Learning Management</p> */}
          </div>
          <div
            className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[50vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isCollapse ? 'top-[10%]' : ''}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-[#818181]">
              <li>
                <Link className="hover:text-gray-500" to="/">Beranda</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/class">Kelas</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/about">Tentang Kami</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/help">Bantuan</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Link to='/login' className="bg-[#01A84D] text-white px-4 py-1 rounded-full">Sign in</Link>
            <i className="text-2xl cursor-pointer md:hidden" onClick={useToogle}>{isCollapse ? <FaTimes /> : <FaBars />}</i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header