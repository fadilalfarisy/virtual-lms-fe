import "../css/outputHelp.css"

function Callme() {
  return (
    <>
      <section id="Contact Us" className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: "#399f89" }}>
        <div className="bg-white flex my-10">
          <div className="w-100">
            <div className="flex flex-col items-center justify-content">
              <div className="p-10">
                <h1 className="font-semibold font-poppins text-primary text-4xl mb-5">Hubungi kita ya!</h1>
                <p className="text-dark font-poppins mb-5 leading-relaxed">Kalau kalian punya kritik atau saran tentang pengalaman kalian saat/setelah pakai sistem kita</p>
                <h2 className="text-dark font-poppins text-lg">ALAMAT</h2>
                <p className="text-primary font-poppins mb-5 leading-relaxed">Jl. Ir H. Juanda No.95, Ciputat, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412</p>
                <h2 className="text-dark font-poppins">NO. TELEPON</h2>
                <a className="text-primary font-poppins" href="https://api.whatsapp.com/send/?phone=62885156080626&text&type=phone_number&app_absent=0" target="_blank">+6285156080626</a>
                <h2 className="text-dark font-poppins mt-5">ALAMAT EMAIL</h2>
                <p className="text-primary font-poppins mb-5">digsboard@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/1.jpg" alt="handphone" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Callme