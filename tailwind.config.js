/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontSize: {
      lg: "1.125rem",
      2.5: "2.5rem",
      1.75: "1.75rem",
    },
    borderRadius: {
      default: "4px",
      xl: "0.75rem",
      lg: "0.5rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      gray_d: "#454C5B",
      grey_4: "#F0F0F6",
      primary: "#39C874",
      $blue_d: "#0B0556",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      gray_d: "#454C5B",
      grey_4: "#F0F0F6",
      primary: "#39C874",
      $blue_d: "#0B0556",
    }),
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
