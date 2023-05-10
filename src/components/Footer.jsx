import { useLocation } from "react-router-dom"

function Footer() {
  const location = useLocation()
  if (location.pathname === '/login' || location.pathname == '/register') {
    return (<></>)
  }

  return (
    <>
      <section>
        <div className="py-10">
          <div className="flex space-x-10">
            <div className="flex space-x-16 pl-20 pt-7">
              <ul>
                <li className="font-dosis font-bold text-2xl">DIGSBOARD</li>
              </ul>
              <ul>
                <li className="font-poppins text-sm font-semibold">Manajemen Konten Pembelajaran Jarak Jauh</li>
                <li className="font-poppins text-2xl pt-4">Siap untuk mulai?</li>
                <li className="font-poppins text-sm text-left pt-3 max-w-xs">Belajar bisa darimana saja. Ketika sudah masuk ke
                  era digital, semua berbasis digital dan belajar juga harus terus bertransformasi</li>
              </ul>
            </div>
            <i className="center" style={{ width: "0px", border: "1px #000 solid" }}></i>
            <div className="flex flex-col">
              <div className="flex space-x-14 pt-7 ">
                <ul className="font-poppins text-sm leading-loose">
                  <li className="font-poppins font-bold text-sm">Navigasi</li>
                  <li className="pt-3">Beranda</li>
                  <li>Kelas</li>
                  <li>Tentang Kami</li>
                  <li>Hubungi Kami</li>
                </ul>
                <ul className="font-poppins text-sm leading-loose">
                  <li className="font-poppins font-bold text-sm">Company</li>
                  <li className="pt-3 leading-loose">6A</li>
                  <li>Sistem Informasi</li>
                  <li>Fakultas Sains dan Teknologi</li>
                  <li>UIN Syarif Hidayatullah Jakarta</li>
                </ul>
              </div>
              <ul className="flex space-x-6 pt-16">
                <li>©2023</li>
                <li>Sistem Informasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
