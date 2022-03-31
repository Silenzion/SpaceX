module.exports = {
  mode: "jit",

  content: ["./src/components/**/*.vue", "./src/layouts/**/*.vue", "./src/pages/**/*.vue", "./src/modules/**/*.vue"],

  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1680px",
    },

    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "67%": "67%",
      "80%": "80%",
      "87%": "87%",
    },

    extend: {
      colors: {
        red: {
          500: "#EA502B",
        },
        gray: {
          200: "#CDCFD4",
          300: "#A7A7AB",
          400: "#686868",
          500: "#4F4F50",
          600: "#2D2F34",
          700: "#27292D",
          800: "#1F2023",
        },
        green: {
          100: "#42BDB0",
          200: "#2AA79A",
          300: "#1C8378",
          400: "#2F4745",
        },
        stone: {
          100: "#6C6CA3",
        },
        violet: {
          100: "#603BED",
        },
      },
      height: {
        192: "192px",
        532: "532px",
      },
      borderRadius: {
        none: "0",
        sm: "5px",
        md: "8px",
        lg: "0.5rem",
        full: "9999px",
        large: "24px",
      },
      opacity: {
        15: "0.15",
      },
      zIndex: {
        1: "1",
      },
    },

    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      38: "38px",
      40: "40px",
      42: "42px",
      44: "44px",
      46: "46px",
      48: "48px",
      50: "50px",
      56: "56px",
      57: "57px",
      60: "60px",
      70: "70px",
      80: "80px",
      90: "90px",
      100: "100px",
      120: "120px",
      140: "140px",
      156: "156px",
      170: "170px",
      240: "240px",
      250: "250px",
      300: "300px",
      475: "475px",
    },
  },
};
