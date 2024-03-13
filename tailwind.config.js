/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        footerBg: "#FCEED5",
        footerBox: "#003459",
        whiteText: "#FDFDFD",
        grayText: "#667479",

        monitoPrimary: "#003459",
        monitoSecondary: "#F7DBA7",
        monitoPink: "#FF564F",
        monitoGreen: "#34C759",
        monitoOrange: "#FF912C",
        monitoBlue: "#00A7E7",

        neutral100: "#00171F",
        neutral80: "#242B33",
        neutral60: "#667479",
        neutral40: "#99A2A5",
        neutral20: "#CCD1D2",
        neutral10: "#EBEEEF",
        neutral00: "#FDFDFD",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(17.5rem, 1fr))",
      },

      backgroundImage: {
        "hero-desktop": "url('./src/assets/svg/background/hero-desktop.svg')",
        "hero-mobile": "url('./src/assets/svg/background/hero-mobile.svg')",
        "banner-desktop":
          "url('./src/assets/svg/banner-background/banner-desktop.svg')",
        "banner-mobile":
          "url('./src/assets/svg/banner-background/banner-mobile.svg')",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
