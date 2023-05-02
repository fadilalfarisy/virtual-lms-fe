import { useState } from "react";
import { FaPlay, FaBars, FaAngleUp, FaTimes } from "react-icons/fa"

function Sidebar() {
  const [isActiveBar, setActiveBar] = useState(false);
  const [isActiveDropdown1, setActiveDropdown1] = useState(true);
  const [isActiveDropdown2, setActiveDropdown2] = useState(true);
  const [isActiveDropdown3, setActiveDropdown3] = useState(true);
  const [isActiveDropdown4, setActiveDropdown4] = useState(true);
  const [isActiveDropdown5, setActiveDropdown5] = useState(true);
  const [isActiveDropdown6, setActiveDropdown6] = useState(true);
  const [isActiveDropdown7, setActiveDropdown7] = useState(true);
  const [isActiveDropdown8, setActiveDropdown8] = useState(true);

  const openBar = () => {
    setActiveBar(!isActiveBar);
    console.log(isActiveBar)
  };

  const dropDown1 = () => { setActiveDropdown1(!isActiveDropdown1) }
  const dropDown2 = () => { setActiveDropdown2(!isActiveDropdown2) }
  const dropDown3 = () => { setActiveDropdown3(!isActiveDropdown3) }
  const dropDown4 = () => { setActiveDropdown4(!isActiveDropdown4) }
  const dropDown5 = () => { setActiveDropdown5(!isActiveDropdown5) }
  const dropDown6 = () => { setActiveDropdown6(!isActiveDropdown6) }
  const dropDown7 = () => { setActiveDropdown7(!isActiveDropdown7) }
  const dropDown8 = () => { setActiveDropdown8(!isActiveDropdown8) }

  return <>
    <section className="bg-[#01A84D] font-[Poppins]">
      <span className="absolute text-white text-xl top-20 cursor-pointer">
        <div className="bg-[#01A84D] flex items-center">
          <i className="p-3" onClick={openBar}><FaBars /></i>
        </div>
      </span>

      <div className={`sidebar fixed top-16 bottom-0 lg:left-0 duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-[#F5F5F5] shadow h-screen ${isActiveBar ? "" : "left-[-300px]"}`}>

        <div className="text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between rounded-md">
            {/* <div className="flex">
              <i className="px-2 py-1 bg-[#01A84D] rounded-md"><FaBookOpen /></i>
              <h1 className="text-[15px] ml-3 text-xl text-black font-bold">Kelas</h1>
            </div> */}
            <img className="w-36 mx-auto" src="/assets/class.svg" alt="..." />
            <i className="cursor-pointer text-black lg:hidden" onClick={openBar}><FaTimes /></i>
          </div>
          <hr className="my-2 text-gray-600" />

          <div>
            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown1}>
                <span className="text-[15px] ml-4 text-white">Semester 1</span>
                <span className={`text-m text-white ${isActiveDropdown1 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown1 && "hidden"}`} id="submenu">
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown2}>
                <span className="text-[15px] ml-4 text-white">Semester 2</span>
                <span className={`text-m text-white ${isActiveDropdown2 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown2 && "hidden"}`} id="submenu">
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown3}>
                <span className="text-[15px] ml-4 text-white">Semester 3</span>
                <span className={`text-m text-white ${isActiveDropdown3 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown3 && "hidden"}`} id="submenu">
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
              <div className="flex items-center hover:text-[#399F89]">
                <FaPlay className="mr-3 text-[#399F89]" />
                <h1 className="cursor-pointer p-1">Social</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default Sidebar