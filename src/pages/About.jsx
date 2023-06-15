function About() {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat p-20 text-center font-poppins"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')", height: "500px" }}>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(5, 167, 126, 0.7)" }}>
          <div className="mx-auto max-w-4xl py-32 sm:py-70 lg:py-70">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Tentang Kami</h1>
              <p className="mt-6 text-base leading-8 text-white">DIGSBOARD merupakan Sistem Manajemen Konten berbasis web yang diperuntukan bagi mahasiswa Sistem Informasi terlebih Sistem Informasi UIN Jakarta.</p>
              <p className="mt-6 text-base leading-8 text-white">Sistem kami memungkinkan semua mahasiswa sistem informasi di seluruh Indonesia dapat mengakses video pembelajaran yang sesuai dengan mata kuliah yang ditempuh oleh mahasiswa sistem informasi.</p>
              <p className="mt-6 text-base leading-8 text-white">DIGSBOARD akan membantu mengumpulkan berbagai konten berbentuk video pembelajaran bagi kamu mahasiswa sistem informasi yang membutuhkan informasi atau ilmu lebih banyak dari perkuliahan biasanya.</p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </div>
      <div className="bg-[#399F89] pt-10 px-64">
        <div className="box-content h-[528px] w-[842px] p-4 box-decoration bg-white rounded-md">
          <div className="px-32 pt-8">
            <div className="box-content w-[549px] h-[203px] shadow-slate-400 shadow-md"
              style={{ "backgroundColor": "rgba(57, 159, 137)" }}>
              <h2 className="font-poppins font-semibold text-5xl text-white text-center pt-5">VISI</h2>
              <p className="font-poppins font-medium text-xl text-center text-white leading-8 pt-4 mx-3">Menjadi platform pembelajaran materi berbasis video untuk mahasiswa sistem informasi</p>
            </div>
          </div>
          <div className="px-32 pt-10">
            <div className="box-content w-[549px] h-[203px] shadow-slate-400 shadow-md" style={{ "backgroundColor": "rgba(57, 159, 137)" }}>
              <h2 className="font-poppins font-semibold text-5xl text-white text-center pt-5">MISI</h2>
              <div className=" flex item-center justify-center">
                <ul className="list-disc font-poppins font-medium text-xl text-white pt-4">
                  <li>
                    Kemudahan akses materi perkuliahan
                  </li>
                  <li>
                    Membantu menunjang pengetahuan
                  </li>
                  <li>
                    Memenuhi kebutuhan materi perkuliahan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#399F89] py-24 sm:py-32 font-poppins ">
        <div className="mx-auto grid max-w-5xl gap-y-5 px-3 lg:px- xl:grid-cols-1">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">Tim Kami</h2>
            <p className="mt-7 mb-7 text-m leading-6 text-white">Dengan beranggotakan 7 orang yang merupakan mahasiswa Sistem Informasi UIN Syarif Hidayatullah Jakarta</p>
          </div>
          <ul role="list" className="grid gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-y-17  xl:grid-cols-4">
            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Pak Abdul 1.svg" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Abdul Mutholib</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Scrum Master</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Group 23.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Hayya Apriligiani</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Product Owner</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Fadil.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Ahmad Fadil Alfarisy</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Backend Developer</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Alda.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Alda Eva Saputri</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Frontend Developer</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Ical.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Faisal Rahman</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">UI/UX Designer</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Indah.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Indah Nurhayati</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">UI/UX Designer</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Ica.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Annisa Dwi Irvianda</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Quality Assurance</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src="/images/Abdil.png" alt="" />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-white">Abdillah Al Mushauwir</h3>
                  <p className="text-xs font-reguler leading-6 text-[#dedede]">Quality Assurance</p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>

      {/* <div className="bg-[#ffffff] py-24 sm:py-32">
          <div className="mx-auto grid max-w-5xl gap-y-5 px-3 lg:px- xl:grid-cols-1">
            <div className="text-center">
              "
              <br />
              <p className="mt-1 mb-2 text-m font-bold leading-6 text-[#151515]">
                Semoga DIGSBOARD dapat berkembang lebih jauh lagi dan dapat memuat materi untuk seluruh jurusan
                dalam perguruan tinggi yang ada di indonesia. DIGSBOARD menjadi platform pembelajaran berbasis video nomor 1
                dalam pencarian mahasiswa di seluruh indonesia              </p>
              <br />
              <br />
              "
            </div>
          </div>
        </div> */}
    </>
  )
}

export default About