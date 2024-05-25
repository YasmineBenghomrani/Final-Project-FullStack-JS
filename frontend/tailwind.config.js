/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPink: "#ff69b4",
        MyPurple: "#320432",
        bgColor: "bg-gradient-to-r to-[#ff69b4ba] from-[#320432]",
        menColor: "bg-gradient-to-br from-sky/90 to-sky/70",
      },
      backgroundImage: {
        heroKid: "url('../../assets/images/image1.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      letterSpacing: {
        tagline: ".15em",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
