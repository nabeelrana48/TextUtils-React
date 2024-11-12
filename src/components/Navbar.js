import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar(props) {

  const primaryTheme = ()=>{
    props.themeToggle("primary")
  }

  const successTheme = ()=>{
    props.themeToggle("success")
  }

  const warningTheme = ()=>{
    props.themeToggle("warning")
  }

  const infoTheme = ()=>{
    props.themeToggle("info")
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === "light" ? "dark" : "light"}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link text-${props.mode === "light" ? "dark" : "light"} dropdown-toggle`}
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} aria-disabled="true" to="/">
                Disabled
              </Link>
            </li>
          </ul>
          <form className="d-flex justify-content-between w-50" role="search">
            <div className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className={`btn btn-${props.mode === "light" ? "outline-success" : "light"}`} type="submit">
                Search
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-evenly">
              <div className={`py-2 px-2 bg-primary rounded-circle border border-${props.themeColor==="primary"? "primary border-3": "0"} mx-2`} onClick={primaryTheme}></div>

              <div className={`py-2 px-2 bg-success rounded-circle border border-${props.themeColor==="success"? "success border-3": "0"} mx-2`} onClick={successTheme}></div>
              
              <div className={`py-2 px-2 bg-warning rounded-circle border border-${props.themeColor==="warning"? "warning border-3": "0"} mx-2`} onClick={warningTheme}></div>
              
              <div className={`py-2 px-2 bg-info rounded-circle border border-${props.themeColor==="info"? "info border-3": "0"} mx-2`} onClick={infoTheme}></div>
            </div>

            <div className="form-check form-switch form-check-reverse ms-2 align-self-center">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode} />
              <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckReverse">{props.mode === "light" ? "Light" : "Dark"} Mode</label>
            </div>

          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Nav should be here",
  home: "home sweet home",
};