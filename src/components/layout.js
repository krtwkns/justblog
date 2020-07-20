import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: `1.250em`,
          marginTop: 0,
          fontSize: `2.250em`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h2>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textDecoration: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `720px`,
        padding: `1.500em`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
