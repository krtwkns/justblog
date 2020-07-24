import Typography from "typography"
import funstonTheme from "typography-theme-funston"

funstonTheme.baseFontSize = "18px"
funstonTheme.baseLineHeight = 1.45
funstonTheme.headerFontFamily = ["Ubuntu", "sans-serif"]
funstonTheme.bodyFontFamily = ["Ubuntu", "sans-serif"]

funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: "var(--textLink)",
    textDecoration: "none",
  },
  "a.anchor": {
    boxShadow: "none",
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
  "h1, h2, h3, h4, h5": {
    fontWeight: 600,
  },
})

const typography = new Typography(funstonTheme)

export default typography
