import { useEffect, useState } from "react";
import { FaPlay, FaBars, FaAngleUp, FaTimes } from "react-icons/fa"
import axios from 'axios'
import { useContext } from "react"
import { AppContext } from '../App.jsx'

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

  const [courseSemester1, setCourseSemester1] = useState([])
  const [courseSemester2, setCourseSemester2] = useState([])
  const [courseSemester3, setCourseSemester3] = useState([])
  const [courseSemester4, setCourseSemester4] = useState([])
  const [courseSemester5, setCourseSemester5] = useState([])
  const [courseSemester6, setCourseSemester6] = useState([])
  const [courseSemester7, setCourseSemester7] = useState([])
  const [courseSemester8, setCourseSemester8] = useState([])

  const getCourseBySemester = async (semester) => {
    try {
      const { data } = await axios.get(`/course?semester=${semester}`)
      switch (semester) {
        case 1:
          setCourseSemester1(data.data)
          break
        case 2:
          setCourseSemester2(data.data)
          break
        case 3:
          setCourseSemester3(data.data)
          break
        case 4:
          setCourseSemester4(data.data)
          break
        case 5:
          setCourseSemester5(data.data)
          break
        case 6:
          setCourseSemester6(data.data)
          break
        case 7:
          setCourseSemester7(data.data)
          break
        case 8:
          setCourseSemester8(data.data)
          break
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCourseBySemester(1)
    getCourseBySemester(2)
    getCourseBySemester(3)
    getCourseBySemester(4)
    getCourseBySemester(5)
    getCourseBySemester(6)
    getCourseBySemester(7)
    getCourseBySemester(8)
  }, [])


  const { videos, setVideos } = useContext(AppContext)
  const { detailVideo, setDetailVideo } = useContext(AppContext)
  const requestVideo = async (courseId) => {
    try {
      const { data } = await axios.get(`/reference?courseId=${courseId}`)
      setVideos(data.references)
      setDetailVideo(data.info)
    } catch (err) {
      console.log(err)
    }
  }

  return <>
    <section className="bg-[#01A84D] font-[Poppins]">
      <span className="absolute text-white text-xl top-20 cursor-pointer">
        <div className="bg-[#01A84D] flex items-center">
          <i className="p-3" onClick={openBar}><FaBars /></i>
        </div>
      </span>

      <div className={`sidebar fixed pt-16 bottom-0 lg:left-0 duration-1000 p-2 w-[250px] overflow-y-auto text-center bg-[#F5F5F5] shadow h-screen ${isActiveBar ? "" : "left-[-300px]"}`}>

        <div className="text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between rounded-full">
            <img className="w-36 mx-auto" src="/assets/class.svg" alt="..." />
            <i className="cursor-pointer text-black lg:hidden" onClick={openBar}><FaTimes /></i>
          </div>
          <hr className="my-2 text-gray-600" />

          <div>
            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown1}>
                <span className="text-[15px] ml-4 text-white">Semester 1</span>
                <span className={`text-m text-white ${isActiveDropdown1 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown1 && "hidden"}`} id="submenu">
              {courseSemester1.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown2}>
                <span className="text-[15px] ml-4 text-white">Semester 2</span>
                <span className={`text-m text-white ${isActiveDropdown2 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown2 && "hidden"}`} id="submenu">
              {courseSemester2.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown3}>
                <span className="text-[15px] ml-4 text-white">Semester 3</span>
                <span className={`text-m text-white ${isActiveDropdown3 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown3 && "hidden"}`} id="submenu">
              {courseSemester3.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown4}>
                <span className="text-[15px] ml-4 text-white">Semester 4</span>
                <span className={`text-m text-white ${isActiveDropdown4 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown4 && "hidden"}`} id="submenu">
              {courseSemester4.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown5}>
                <span className="text-[15px] ml-4 text-white">Semester 5</span>
                <span className={`text-m text-white ${isActiveDropdown5 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown5 && "hidden"}`} id="submenu">
              {courseSemester5.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown6}>
                <span className="text-[15px] ml-4 text-white">Semester 6</span>
                <span className={`text-m text-white ${isActiveDropdown6 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown6 && "hidden"}`} id="submenu">
              {courseSemester6.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown7}>
                <span className="text-[15px] ml-4 text-white">Semester 7</span>
                <span className={`text-m text-white ${isActiveDropdown7 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown7 && "hidden"}`} id="submenu">
              {courseSemester7.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

            <div className="bg-[#399F89] p-2.5 mt-2 flex items-center rounded-full px-4 duration-300 cursor-pointer">
              <div className="flex justify-between w-full items-center" onClick={dropDown8}>
                <span className="text-[15px] ml-4 text-white">Semester 8</span>
                <span className={`text-m text-white ${isActiveDropdown8 ? 'rotate-180' : ''}`} id="arrow">
                  <FaAngleUp />
                </span>
              </div>
            </div>
            <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${isActiveDropdown8 && "hidden"}`} id="submenu">
              {courseSemester8.map((course) => {
                return <div
                  className="flex items-center hover:text-[#399F89]"
                  key={course._id}
                  onClick={() => requestVideo(course._id)}>
                  <FaPlay className="mr-3 text-[#399F89]" />
                  <h1 className="cursor-pointer p-1">{course.subject}</h1>
                </div>
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}

export default Sidebar