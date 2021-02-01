/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = {
  gray_d: "#454C5B",
  grey_4: "#F0F0F6",
  gray_l: "#828282",
  A9: "#A9A9A9",
  primary: "#39C874",
  $blue_d: "#0B0556",
  $error: "#EF5755",
}
module.exports = {
  theme: {
    fontSize: {
      normal: "1rem",
      lg: "1.125rem",
      2.5: "2.5rem",
      1.75: "1.75rem",
      10: "10px",
      12: "12px",
      14: "14px",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      ...colors,
    }),
    spacing: {
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      17: "4.25rem",
      18: "4.5rem",
      19: "4.75rem",
      20: "5rem",
      21: "5.25rem",
      22: "5.5rem",
      24: "6rem",
      "70px": "70px",
    },
    borderRadius: {
      default: "4px",
      xl: "0.75rem",
      lg: "0.5rem",
      none: "0",
      sm: "0.125rem",
      md: "0.3125rem",
      3: "3px",
      5: "5px",
      10: "10px",
      12: "12px",
      15: "15px",
      20: "20px",
      27: "27px",
      30: "30px",
      40: "40px",
      full: "9999px",
      large: "12px",
    },
    inset: {
      8: "2rem",
      0: 0,
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
    ],
  },
}
