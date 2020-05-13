import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <Link to="/Homepage">
          <img src="resource/assets/fmLogo2.png" className="fmLogo" />
        </Link>
      </div>

      <ul className="navigation">
        <li>
          <Link className="nav-link" to="/ProjectPage">
            PROJECT
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/SketchPage">
            SKETCH
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
