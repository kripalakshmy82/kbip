import React, { useState } from 'react'

export default function Header() {
    const [toggle,setToggle] = useState(false);
  return (
    <header
    id="header"
    className="fixed-top aos-init aos-animate"
    data-aos="slide-down"
    data-aos-delay={50}
    data-aos-duration={1000}
    data-aos-easing="ease-in-out"
  >
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom-bg top-navbar active">
      <div className="container">
        <a className="navbar-brand text-white" href="" title="kbip">
          <img
            src="https://www.kbip.org/images/logo.png?d=06042023113446"
            width={130}
            alt="Official logo KBIP"
            title="Official logo KBIP"
            className="float-left"
          />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-english" id="navbarNav">
          <ul className="navbar-nav right ml-auto">
            <li className="nav-item active">
              <a title="Kbip" className="nav-link" href="https://www.kbip.org/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  title="About KBIP"
                  className="dropdown-item"
                  href="https://www.kbip.org/about"
                >
                  KBIP
                </a>
               
                <a
                  title="Governing Body"
                  className="dropdown-item"
                  href="https://www.kbip.org/about/governing-body"
                >
                  Governing Body
                </a>
              </div>
            </li>
            <li className="nav-item ">
              <a
                title="Vision, Mission & Activities"
                className="nav-link"
                href="https://www.kbip.org/vision"
              >
                Vision, Mission &amp; Activities
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="Projects"
                className="nav-link"
                href="https://www.kbip.org/activities"
              >
                Projects
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="Events"
                className="nav-link"
                href="https://www.kbip.org/events"
              >
                Events
              </a>
            </li>
           
            <li className="nav-item ">
              <a
                title="Gallery"
                className="nav-link"
                href="https://www.kbip.org/gallery"
              >
                Gallery
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="News Room"
                className="nav-link"
                href="https://www.kbip.org/newsroom"
              >
                News Room
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="Tenders"
                className="nav-link"
                href="https://www.kbip.org/tenders"
              >
                Tenders
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="RTI"
                className="nav-link"
                href="https://www.kbip.org/about/rti"
              >
                RTI
              </a>
            </li>
            <li className="nav-item ">
              <a
                title="Contact Us"
                className="nav-link"
                href="https://www.kbip.org/contact"
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item ml-2 langmal">
{!toggle &&  <a
                className="nav-link mt-2 py-0 px-2 border rounded"
                href="https://www.kbip.org/malayalam/"
                onClick={()=>{setToggle(!toggle)}}
              >മലയാളം
              </a>}
              {toggle &&  <a
                className="nav-link mt-2 py-0 px-2 border rounded"
                href="https://www.kbip.org/"
                onClick={()=>{setToggle(toggle)}}
              >English
              </a>}

             



            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
  
  )
}
