/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      // Sizes
      spacing: { 15: "3.75rem" },
      margin: {
        13: "3.25rem",
        15: "3.75rem",
      },
      fontSize: {
        2.5: "0.625rem",
        3.5: "0.875rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        12: "3rem",
        15: "3.75rem",
      },
      outlineWidth: {
        0.5: "0.125rem",
      },
      maxWidth: {
        container: "1440px",
      },
      borderRadius: {
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        5: "1.25rem",
        10: "2.5rem",
      },

      // Misc
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
      padding: {
        "desktop-padding": "8.125rem",
        "mobile-padding": "1rem",
      },
      backgroundImage: {
        "hero-desktop":
          "url('./src/assets/svg/background/bg-hero-desktop.svg')",
        "hero-mobile": "url('./src/assets/svg/background/bg-hero-mobile.svg')",
        "banner-desktop":
          "url('./src/assets/svg/background/bg-banner-desktop.svg')",
        "banner-mobile":
          "url('./src/assets/svg/background/bg-banner-mobile.svg')",
        "banner2-desktop":
          "url('./src/assets/svg/background/bg-banner2-desktop.svg')",
        "banner2-mobile":
          "url('./src/assets/svg/background/bg-banner2-mobile.svg')",

        "banner-text": "url('./src/assets/svg/background/text.svg')",
      },
      screens: {
        "1sm": "414px",
        "1xl": "1440px",
      },
    },
  },
  plugins: [],
};
