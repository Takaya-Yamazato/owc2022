import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="OWC2022" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <button
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  aria-label="Nav button"
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                  tabIndex={0}
                >
            {/* <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              aria-label="Nav button"
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            > */}
              <span />
              <span />
              <span />
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/submission/">
                Submission
              </Link>
              <Link className="navbar-item" to="/blog/">
                News and Announcements
              </Link>
              <Link className="navbar-item" to="/program/">
                Program
              </Link>
              <Link className="navbar-item" to="/committee/">
                Committee
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/Takaya-Yamazato/owc-2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
