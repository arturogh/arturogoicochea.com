import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Inter UI",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Source Serif", "serif"],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
