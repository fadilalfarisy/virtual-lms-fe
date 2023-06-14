import { Link } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AppContext } from '../App.jsx'
import { FaPlus, FaChevronLeft, FaPlay } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { RxCross2 } from "react-icons/rx"
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlineStop } from 'react-icons/ai'
import { MdEdit } from 'react-icons/md'
import { setAccessToken } from "../services/tokenService"

function Class() {
  const { videos, setVideos } = useContext(AppContext)
  const { detailVideo, setDetailVideo } = useContext(AppContext)
  const { loggedStatus, setLoggedStatus } = useContext(AppContext)
  const [authorizationUser, setAuthorizationUser] = useState(false)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getReferences = async () => {
      try {
        const { data } = await axios.get(`/reference?courseId=6486e4c17aacfec76892b3ee`)
        setVideos(data.references)
        setDetailVideo(data.info)
      } catch (err) {
        console.log(err)
      }
    }
    getReferences()
  }, [])

  const [title, setTitle] = useState("")
  const [channel, setChannel] = useState("")
  const [url, setUrl] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const createReference = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`/reference`, {
        title,
        channel,
        link: url,
        courseId: detailVideo.course._id
      }, {
        withCredentials: 'include'
      })
      const response = await axios.get(`/reference?courseId=${detailVideo.course._id}`)
      setShowModal(false)
      setSuccessModal(true)
      setVideos(response.data.references)
      setDetailVideo(response.data.info)
      setChannel('')
      setTitle('')
      setUrl('')
    } catch (error) {
      console.log(error)
      if (error.response?.status === 400) {
        return setErrMsg('Invalid URL Video Youtube');
      }
      setAccessToken('')
      setAuthorizationUser(true)
    }
  }

  const [search, setSearch] = useState("")
  const searchReference = async (event, query) => {
    event.preventDefault()
    try {
      let path = `/reference?courseId=${detailVideo.course._id}`
      if (search != undefined && search != '') {
        path = `/reference?courseId=${detailVideo.course._id}&search=${search}`
      }
      const response = await axios.get(path)
      console.log(response)
      setVideos(response.data.references)
      setDetailVideo(response.data.info)
    } catch (error) {
      console.log(error)
    }
  }

  const [showSuccessModal, setSuccessModal] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [deletedId, setDeletedId] = useState('')
  const [authentication, setAuthentication] = useState(false)

  const deleteReference = async (event, id) => {
    event.preventDefault()
    try {
      const { data } = await axios.delete(`/reference/${id}`, {
        withCredentials: 'include'
      })
      console.log(data)
      const response = await axios.get(`/reference?courseId=${detailVideo.course._id}`)
      setShowModal(false)
      setVideos(response.data.references)
      setDetailVideo(response.data.info)
    } catch (error) {
      if (error.response?.status === 401) {
        return setAuthentication(true);
      }
      console.log(error)
      setAccessToken('')
      setAuthorizationUser(true)
    }
  }

  const [updateModal, setUpdateModal] = useState(false)
  const [referenceById, setReferenceById] = useState({})
  const [updatedId, setUpdatedId] = useState('')

  const getReferenceById = async (event, id) => {
    event.preventDefault()
    try {
      const response = await axios.get(`/reference/${id}`)
      setUpdateModal(true)
      setUpdatedId(response.data.data._id)
      setTitle(response.data.data.title)
      setChannel(response.data.data.channel)
      setUrl(response.data.data.link)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const updateReference = async (event, id) => {
    event.preventDefault()
    try {
      await axios.put(`/reference/${id}`, {
        title,
        channel,
        link: url,
        courseId: detailVideo.course._id
      }, {
        withCredentials: 'include'
      })
      const response = await axios.get(`/reference?courseId=${detailVideo.course._id}`)
      setUpdateModal(false)
      setSuccessModal(true)
      setVideos(response.data.references)
      setDetailVideo(response.data.info)
      setChannel('')
      setTitle('')
      setUrl('')
    } catch (error) {
      console.log(error)

      if (error.response?.status === 400) {
        return setErrMsg('Invalid URL Video Youtube');
      }
      setChannel('')
      setTitle('')
      setUrl('')
      if (error.response?.status === 401) {
        setUpdateModal(false)
        return setAuthentication(true);
      }
      setUpdateModal(false)
      setAccessToken('')
      setAuthorizationUser(true)
    }
  }

  return (
    <>
      <div>
        <Sidebar />

        <div className="absolute mt-24 ml-80">
          <section className="box-content w-[900px]">
            <div className="flex justify-between">
              <div className="h-16 flex justify-center items-center">
                <img src={`/icon/Icon${detailVideo.course?.semester}.svg`} className="object-cover" alt="" />
                <div className="ml-3">
                  <h1 className="font-[Poppins] font-normal text-base text-[#818181]">{detailVideo.course?.subject}</h1>
                  <h1 className="font-[Poppins] font-semibold text-3xl text-[#399F89]">Semester {detailVideo.course?.semester}</h1>
                  <h1 className="text-[#818181] font-[Poppins] text-xs font-normal mt-1 ">{detailVideo.total} Video</h1>
                </div>
              </div>

              <section className="flex justify-self-end items-center">
                <form className="container flex flex-row justify-center items-center px-4 sm:px-6 lg:px-8 w-[219px] ">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-66 px-3 py-1 text-[12px] rounded-full font-poppins focus:shadow focus:outline-none border-[0.84px] border-[#ACB1C6] bg-white"
                      placeholder="Cari disini ya..."
                      value={search}
                      onChange={(e) => { setSearch(e.target.value) }} />
                  </div>
                  <button
                    type="submit"
                    className="ml-1 p-1 rounded-full bg-[#399F89]"
                    onClick={(event) => { searchReference(event) }} >
                    <FiSearch className="text-white" />
                  </button>
                </form>
              </section>
            </div>
          </section>

          <section className="mb-32">
            {videos && videos.length > 0 ? videos.map((reference) => {
              return <div key={reference._id}>
                <div className="box-content mt-6 font-[Poppins] relative " >
                  {loggedStatus ?
                    <div className="absolute -right-2 top-1">
                      <button
                        className="bg-[#FF2D2D] rounded-full p-0.5 hover:bg-[#F41d2d]"
                        // onClick={(event) => { deleteReference(event, reference._id) }}>
                        onClick={() => {
                          setDeleteModal(true)
                          setDeletedId(reference._id)
                        }}>
                        <RxCross2 className="text-[12px] text-white" />
                      </button>
                    </div>
                    : <></>
                  }

                  <div
                    className="flex flex-row justify-center items-center w-[900px] h-[63.75px] rounded-[7.9px] shadow-md shadow-slate-300 justify-between px-5"
                    style={{ "backgroundColor": "rgba(252, 252, 252, 1)" }}>
                    <div className="my-2">
                      <h2 className="text-[19px] font-bold font-[Poppins]">
                        {reference.title}
                      </h2>
                      <p className="text-[11px] font-[Poppins]">
                        {reference.channel}
                      </p>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                      {loggedStatus ? <MdEdit className="mr-6 text-[#01A84D]"
                        onClick={(event) => {
                          getReferenceById(event, reference._id)
                        }} />
                        : <></>
                      }
                      <div
                        className="btn btn-secondary flex justify-center items-center w-[160.16px] h-[32.66px] rounded-[11px] text-[10.54px] text-center text-white my-4 hover:text-slate-300"
                        style={{ "backgroundColor": "rgba(1, 168, 77, 1)" }}>
                        <FaPlay className="mr-1" />
                        <a href={reference.link} target="_blank" className="my-2">
                          Tonton Sekarang!
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            }) : <></>}


            {
              loggedStatus ?
                <section>
                  <button
                    className="mt-6 ml-80 flex flex-row w-[160px] h-[35.16px] rounded-[41px] bg-[#E5E5E5] justify-center items-center hover:bg-[#ECECEC] hover:text-[#5F5A5A]"
                    type="button"
                    onClick={() => setShowModal(true)}>
                    <div
                      className="w-[24.72px] h-[24.72px] rounded-full mr-4 my-1 "
                      style={{ "backgroundColor": "rgba(217, 217, 217, 1)" }}
                    >
                      <FaPlus className="flex justify-center items-center m-1 text-[#4E4444]" />
                    </div>
                    <p className="pr-3 text-center font-[Poppins] font-medium text-[13px] hover:text-[#5F5A5A]">
                      Tambah Video
                    </p>
                  </button>
                </section>
                : <></>
            }


            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <section className="mt-20 ml-32">
                    <div className="bg-white flex flex-col items-center justify-center w-[620.19px] h-[529.1px] rounded-[6.88px] shadow-lg shadow-slate-400">
                      <form>
                        <div className="flex flex-col justify-center items-center">
                          <label htmlFor="title">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Judul</span>
                            <input
                              type="text"
                              name="title"
                              placeholder="Judul Video"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)} />
                          </label>
                          <label htmlFor="channel" className="mt-3">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Channel</span>
                            <input
                              type="text"
                              name="channel"
                              placeholder="Nama Channel"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={channel}
                              onChange={(e) => setChannel(e.target.value)} />
                          </label>
                          <label htmlFor="url" className="mt-3">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Tautan</span>
                            <input
                              type="text"
                              name="url"
                              placeholder="URL Video"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)} />
                          </label>
                          <p className="text-xs flex items-center justify-center text-[#880808]">{errMsg != "" ? errMsg : ""}</p>
                        </div>


                        <div className="flex items-center justify-center pt-6">
                          <button
                            className="bg-[#f7f7f7] font-[Poppins] text-[14.94px] px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Keluar
                          </button>
                          <button
                            className="bg-[#01A84D] ml-6 text-white font-[Poppins] text-[14.94px] hover:bg-[#31D67C] px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(event) => {
                              createReference(event)
                            }}
                          >
                            Tambahkan
                          </button>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </>
            ) : null}

            {showSuccessModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <section className="mt-20 ml-20">
                    <div className="w-[643px] h-[327px] bg-white shadow-lg relative shadow-slate-400 rounded-lg flex flex-col justify-center items-center">
                      <button onClick={() => setSuccessModal(false)}>
                        <FaChevronLeft className="absolute left-6 top-6 text-xl text-[#01A84D]" />
                      </button>
                      <BsCheckCircle className="text-9xl text-[#01A84D]" />
                      <div className="mt-8">
                        <h1 className="font-medium font-[Poppins] text-4xl text-center">Selamat!</h1>
                        <p className="font-medium font-[Poppins] text-base text-center mt-2">Video yang kamu tambahkan berhasil diupload</p>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : null}

            {authorizationUser ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <section className="mt-20 ml-20">
                    <div className="w-[643px] h-[327px] bg-white shadow-lg relative shadow-slate-400 rounded-lg flex flex-col justify-center items-center">
                      <AiOutlineStop className="text-9xl text-[#F13541]" />
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold font-[Poppins] text-4xl text-center">Maaf, sesi anda habis.</h1>
                        <p className="font-medium font-[Poppins] text-base text-center mt-2">Mohon untuk login kembali ya</p>
                        <Link to={'/login'}>
                          <button
                            className="w-24 h-8 bg-[#01A84D] rounded-[5px] text-white font-[Poppins] m-8 text-[15px] hover:bg-[#31D67C]"
                            type="button">
                            Kembali
                          </button>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : null}

            {showDeleteModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <section className="mt-20 ml-20">
                    <div className="bg-white w-[620px] h-[123px] rounded-[6.88px] shadow-lg shadow-slate-400 py-5">
                      <div className="text-center font-[Poppins] text-[#399F89] font-semibold text-[22px]">
                        <h1>Anda yakin ingin menghapus video ini?</h1>
                      </div>
                      <div className="flex justify-center space-x-3 mt-2">
                        <button
                          className="w-24 h-8 bg-white rounded-[5px] text-[#01A84D] font-[Poppins] text-[15px] hover:text-[#31D67C] shadow-md shadow-slate-400"
                          type="button"
                          onClick={() => setDeleteModal(false)}>
                          Tidak
                        </button>
                        <button
                          className="w-24 h-8 bg-[#01A84D] rounded-[5px] text-white font-[Poppins] text-[15px] hover:bg-[#31D67C] shadow-md shadow-slate-400"
                          type="button"
                          onClick={(event) => {
                            setDeleteModal(false)
                            deleteReference(event, deletedId)
                          }}>
                          Ya, hapus
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : null}

            {authentication ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <section className="mt-20 ml-20">
                    <div className="w-[643px] h-[327px] bg-white shadow-lg relative shadow-slate-400 rounded-lg flex flex-col justify-center items-center">
                      <AiOutlineStop className="text-9xl text-[#F13541]" />
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold font-[Poppins] text-2xl text-center mt-4">Maaf, anda tidak dapat mengakses data ini</h1>
                        <button
                          className="w-24 h-8 bg-[#01A84D] rounded-[5px] text-white font-[Poppins] m-8 text-[15px] hover:bg-[#31D67C]"
                          type="button"
                          onClick={() => setAuthentication(false)}>
                          Kembali
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : null}

            {updateModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <section className="mt-20 ml-32">
                    <div className="bg-white flex flex-col items-center justify-center w-[620.19px] h-[529.1px] rounded-[6.88px] shadow-lg shadow-slate-400">
                      <form>
                        <div className="flex flex-col justify-center items-center">
                          <label htmlFor="title">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Judul</span>
                            <input
                              type="text"
                              name="title"
                              placeholder="Judul Video"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)} />
                          </label>
                          <label htmlFor="channel" className="mt-3">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Channel</span>
                            <input
                              type="text"
                              name="channel"
                              placeholder="Nama Channel"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={channel}
                              onChange={(e) => setChannel(e.target.value)} />
                          </label>
                          <label htmlFor="url" className="mt-3">
                            <span className="block font-semibold font-[Poppins] text-[#399F89] text-[22px]">Tautan</span>
                            <input
                              type="text"
                              name="url"
                              placeholder="URL Video"
                              className="mt-3 w-[462.06px] h-[54.71px] font-[Poppins] border-[0.57px] pl-[14px] border-[#ACB1C6] rounded-[6.59px]"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)} />
                          </label>
                          <p className="text-xs flex items-center justify-center text-[#880808]">{errMsg != "" ? errMsg : ""}</p>
                        </div>


                        <div className="flex items-center justify-center pt-6">
                          <button
                            className="bg-[#f7f7f7] font-[Poppins] text-[14.94px] px-6 py-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setUpdateModal(false)
                              setTitle('')
                              setChannel('')
                              setUrl('')
                            }}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-[#01A84D] ml-6 text-white font-[Poppins] text-[14.94px] hover:bg-[#31D67C] px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(event) => {
                              updateReference(event, updatedId)
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </>
            ) : null}
          </section>
        </div >
      </div >
      {/* <Pagination /> */}
    </>
  )
}

export default Class