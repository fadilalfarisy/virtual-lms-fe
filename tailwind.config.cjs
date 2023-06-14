/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijautos: "#399F89",
        abumuda: "#393939",
        abutua: "#818181",
        putihabu: "#F6F6F6",
        hijautua: "#01A84",
        ijolumut: "#01A84D",
        ijoend: "#2C8C78",
        latar: "#F5F5F5",
        abu: "#B3B3B3",
        garis: "#ACB1C6",
        bgakses: "#F2F2F2",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dosis: ["Dosis"],
        inter: ["Inter"],
        roboto: ["Roboto"],
      },
      fontSize: {
        kecil: "0.525200625rem",
        nav: "1.343rem",
        akses: "32px",
        belajar: "29px",
        digs: "70.69px",
        bukan: "45px",
        pendidikan: "22px",
      },
      spacing: {
        '368': "23rem",
        '770': "48rem",
        '400': "25rem",
        '570': "35.625rem",
        '290': "18.125rem",
        '500': "31.25rem",
        '1440': "90rem",
        '600': "37,5rem",
      }
    },
  },
  plugins: [],
}
