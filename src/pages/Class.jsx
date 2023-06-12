// import Pagination from "../components/Pagination"
import Sidebar from "../components/Sidebar"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AppContext } from '../App.jsx'
import { FaPlus } from "react-icons/fa"
import { RxCrossCircled } from "react-icons/rx"



function Class() {
  const { videos, setVideos } = useContext(AppContext)
  const { detailVideo, setDetailVideo } = useContext(AppContext)
  const [showModal, setShowModal] = useState(false);
  const { loggedStatus, setLoggedStatus } = useContext(AppContext)

  useEffect(() => {
    const getReferences = async () => {
      try {
        // let path = `/reference?courseId=6476d29ba08eb10f2e6636df`
        // if (detailVideo.course != null) {
        //   path = `/reference?courseId=${detailVideo.course._id}`
        // }
        const { data } = await axios.get(`/reference?courseId=6476d29ba08eb10f2e6636df`)
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
      const { data } = await axios.post(`/reference`, {
        title,
        channel,
        link: url,
        courseId: detailVideo.course._id
      }, {
        withCredentials: true
      })
      console.log(data)
      const response = await axios.get(`/reference?courseId=${detailVideo.course._id}`)
      setShowModal(false)
      setVideos(response.data.references)
      setDetailVideo(response.data.info)
    } catch (error) {
      console.log(error)
      if (error.response?.status === 400) {
        return setErrMsg('Invalid request');
      }
      if (error.response?.status === 403) {
        return setErrMsg('Please login');
      }
      return setErrMsg('Gagal masuk')
    }
  }

  return (
    <>
      <div>
        <Sidebar />

        <div className="absolute mt-24 ml-80">
          <section className="box-content">
            <div>
              <div className="flex flex-row">
                <div className="h-16 flex justify-center items-center">
                  <img src={`/icon/Icon${detailVideo.course?.semester}.svg`} className="object-cover" alt="" />
                </div>
                <div className="ml-3">
                  <h1 className="font-[Poppins] font-normal text-base text-[#818181]">{detailVideo.course?.subject}</h1>
                  <h1 className="font-[Poppins] font-semibold text-3xl text-[#399F89]">Semester {detailVideo.course?.semester}</h1>
                  <h1 className="text-[#818181] font-[Poppins] text-xs font-normal mt-1 ">{detailVideo.total} Video</h1>
                </div>

              </div>
              <div className="text-right mr-100">
                <h1 className="underline font-[Poppins] text-[#818181] text[19px]">
                  {loggedStatus && 'Admin'}
                </h1>
              </div>
            </div>
          </section>
          {/* <section className="box-content">
            <div>
              <div className="w-[205.02px] h-[67.79px]">
                <img src="/images/class.png" alt="" />
              </div>
              <p>{detailVideo.course?.subject}</p>
              <p>Semester {detailVideo.course?.semester}</p>
              <p>{detailVideo.total} Video</p>
              <div className="text-right ml-100">
                <h1 className="underline font-[Poppins] text-[#818181] text[19px]">
                  Admin
                </h1>
              </div>
            </div>
          </section> */}

          <section className="mb-32">
            {videos && videos.length > 0 ? videos.map((reference) => {
              return <div key={reference._id}>
                <div className="box-content mt-6 font-[Poppins] relative " >
                  <div className="absolute -right-2 -top-1">
                    <RxCrossCircled className="text-[24px] text-white bg-[#FF2D2D] rounded-full" />
                  </div>
                  <div
                    className="flex flex-row w-[900px] h-[63.75px] rounded-[7.9px] shadow-md shadow-slate-300 justify-between px-5"
                    style={{ "backgroundColor": "rgba(252, 252, 252, 1)" }}>
                    <div className="my-2">
                      <h2 className="text-[19px] font-bold font-[Poppins]">
                        {reference.title}
                      </h2>
                      <p className="text-[11px] font-[Poppins]">
                        {reference.channel}
                      </p>
                    </div>

                    <div
                      className="btn btn-secondary w-[160.16px] h-[32.66px] rounded-[11px] text-[10.54px] text-center underline text-white my-4 hover:text-slate-300"
                      style={{ "backgroundColor": "rgba(1, 168, 77, 1)" }}>
                      <a href={reference.link} target="_blank"><p className="my-2">Tonton Sekarang!</p></a>
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
                            Close
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
                    {/* <button
                          class="w-[239.77px] h-[39.82px] bg-[#01A84D] rounded-[4.58px] text-white font-[Poppins] text-[14.94px] mx-48 hover:bg-[#31D67C]">
                          Kembali
                        </button>
                        <button
                          class="w-[239.77px] h-[39.82px] bg-[#01A84D] rounded-[4.58px] text-white font-[Poppins] text-[14.94px] mx-48 hover:bg-[#31D67C]">
                          Tambahkan
                        </button> */}
                  </section>
                  {/*footer*/}
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div> */}
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
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