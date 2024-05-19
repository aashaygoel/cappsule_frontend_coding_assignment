/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['Inter'],
      },
      boxShadow: {
        input: ' 0px 0px 50px 0px rgba(173, 173, 173, 0.4)',
        saltBox: '0px 0px 30px 0px rgba(0, 0, 0, 0.1)',
        selectedBox: '0px 0px 11.54px 0px rgba(0, 197, 161, 0.4)',
      },
      backgroundImage: {
        Salt: 'linear-gradient(275.41deg, #D5E7E6 -27.33%, #FFFFFF 46.85%)',
        NSelectedNAvailable:
          "url(data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23ABABABFF' stroke-width='2' stroke-dasharray='7' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e)",
        SelectedNAvailable:
          "url(data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23112D31FF' stroke-width='3' stroke-dasharray='7' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e)",
      },
    },
  },
  plugins: [],
};
