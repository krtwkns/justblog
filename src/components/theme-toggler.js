/* eslint-disable */
import React from "react"
// import { ThemeToggler } from "gatsby-plugin-dark-mode"

const addBodyClass = className => document.body.classList.add(className)
const removeBodyClass = className => document.body.classList.remove(className)

const ThemeTogglerComponent = () => {
  return (
    <label className="switch round">
      <input
        type="checkbox"
        onChange={e =>
          e.target.checked ? addBodyClass("dark") : removeBodyClass("dark")
        }
        defaultChecked={true}
      />
      <span className="slider round" />
    </label>
  )
}

export default ThemeTogglerComponent
