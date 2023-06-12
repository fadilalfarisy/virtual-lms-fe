import "../css/gambar.css"
import "../css/outputHome.css"

function Home() {
  return (
    <>
      <section className="container flex">
        <div className="pt-36 pl-32">
          <div className="container max-w-sm">
            <h1 className="font-poppins font-semibold text-6xl m-auto text-hijautos text-left">Apa itu</h1>
            <h1 className="font-poppins font-semibold text-6xl m-auto text-hijautos text-left mt-2">DIGSBOARD?</h1>
            <p className="text-left font-poppins text-xl text-black mt-7">
              Sistem Manajemen Konten berbasis web khusus bagi mahasiswa Sistem
              Informasi terlebih Sistem Informasi UIN Jakarta
            </p>
            <div className="btn btn-secondary mt-3 bg-ijolumut rounded py-3 px-5 w-44 hover:bg-green-700 text-white font-poppins text-base text-center"><a href="" className=""></a>Info selanjutnya</div>
          </div>
        </div>
        <div className="container mt-32 max-w-xl mx-auto h-96 bg-slate-300 rounded-xl shadow-xl shadow-slate-400"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')" }}>
          <p className="py-36 text-center font-poppins font-bold text-digs text-white">DIGSBOARD</p></div>
      </section>
      <div className="py-16 bg-putihabu mt-20">
        <p className="font-poppins text-2xl text-center">
          Dibawah naungan Prodi Sistem Informasi UIN Syarif Hidayatullah Jakarta
        </p>
        <div className="mt-5 container flex space-x-10 center">
          <img src="/images/Logo 05.png" alt="UIN" />
          <img src="/images/Logo 04.png" alt="ainstem" />
          <img src="/images/Logo 03.png" alt="gudag" />
          <img src="/images/Logo 02.png" alt="digs" />
        </div>
      </div>

      <section className="container-fluid">
        <div className="bg-hijautos h-600  " >
          <div className="flex py-40 px-28">
            <div className="">
              <h2 className="font-poppins text-white text-belajar text-left">Belajar <span className="italic">Online</span> adalah Solusi</h2>
              <p className="pt-5 max-w-md font-poppins text-lg text-white">Teknologi semakin canggih,
                <span className="italic">E-Learning</span> semakin tumbuh berkembang
                membuat banyak sekali kesempatan untuk bisa memanfaatkan media ini
                dengan baik demi tercapainya sebuah tujuan</p>
            </div>
            <div className="pl-28" >
              <img src="/images/Union.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="px-28 flex bg-bgakses">
          <div className="py-40">
            <img src="/images/Union (1).svg" alt="image4" />
          </div>
          <div className="py-44 pl-28">
            <h2 className="font-poppins text-akses text-black font-medium">Akses yang Mudah</h2>
            <p className="max-w-md text-black text-lg font-poppins font-normal pt-3">DIGSBOARD berupaya untuk terus memberikan kemudahan bagi para pengguna khususnya mahasiswa Sistem Informasi dalam mengakses materi perkuliahan yang ada dan tersedia dibanyak Platform</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex w-full">
          <div className="max-w-2xl pl-44 pt-44">
            <h2 className="text-black font-poppins text-akses">Investasi Pembelajaran</h2>
            <p className="font-poppins text-lg text-left leading-relaxed pt-5">DIGSBOARD memberikan wawasan terkait luasnya lingkup materi yang dipaparkan membuat DIGSBOARD menjadi tempat pembelajaran jangka panjang</p>
          </div>
          <div className="container pl-10 pt-40">
            <img src="/images/image 5.png" className="shadow-lg bg-slate-400 rounded-md" alt="image5" />
          </div>
        </div>
      </section>

      <section className="container pt-40 pl-24">
        <div className="flex">
          <div className="bg-hijautos h-368 w-400 py-32">
            <h1 className="text-center font-poppins font-bold text-white text-digs">DIGSBOARD</h1>
          </div>
          <div className="bg-ijoend h-368 w-770">
            <h2 className="pl-16 pt-14 text-sm font-poppins text-white">Faisal Rahman</h2>
            <h5 className="pl-16 pt-7 px-14 text-white text-bukan font-poppins leading-tight">“Bukan sekedar manajemen <span className="italic">virtual learning</span>”</h5>
            <div className="pl-16 pt-5 text-white text-lg font-poppins hover:text-slate-300"><a href="">Baca selengkapnya</a></div>
          </div>
        </div>
        <div className="pt-10 flex space-x-7">
          <div className="bg-bgakses w-570 h-290 px-8 py-16">
            <p className="font-poppins font-semibold text-xl text-black">Kebingungan mencari video pembelajaran yang cocok untuk Mata Kuliah kamu?</p>
            <p className="pt-6 font-poppins text-lg text-black">Website kami membantu mengumpulkan konten pembelajaran yang kamu butuhkan</p>
            <div className="pt-7 text-sm font-poppins text-black hover:text-slate-300"><a href="">Baca selengkapnya</a></div>
          </div>
          <div className="bg-bgakses w-570 h-290 px-8 py-16">
            <p className="font-poppins font-semibold text-xl text-black">Materi yang disampaikan lewat perkuliahan masih kurang?</p>
            <p className="pt-6 font-poppins text-lg text-black">DIGSBOARD hadir untuk memenuhi setiap kebutuhan kamu dalam memperkaya pengetahuan</p>
            <div className="pt-7 text-sm font-poppins text-black hover:text-slate-300"><a href="">Baca selengkapnya</a></div>
          </div>
        </div>
      </section>

      <div className="pt-32 h-400">
        <p className="text-center font-poppins text-pendidikan">"Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia"</p>
        <div className="center pt-5">
          <img src="/images/Mask group.png" className="nelson" alt="nelson" />
        </div>
        <h6 className="pt-5 text-sm font-poppins text-center">Nelson Mandela</h6>
      </div>

      <section>
        <div className="bg-bgakses h-500 py-36 px-96">
          <h2 className="font-poppins text-2xl font-semibold text-center">Siap untuk mulai?</h2>
          <p className="pt-10 font-poppins text-xl text-center">Manfaatkan DIGSBOARD untuk semua kebutuhan perkualiahanmu. Kami hadir untukmu dan hanya untukmu!</p>
          <div className="center pt-5">
            <div className="center btn btn-secondary bg-ijolumut rounded h-14 w-48 hover:bg-green-700 text-white font-poppins text-lg"><a href="" className="py-3">Mulai Sekarang</a></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home