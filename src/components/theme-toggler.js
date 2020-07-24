/* eslint-disable */
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeTogglerComponent = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className="switch round">
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <span className="slider round" />
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeTogglerComponent
