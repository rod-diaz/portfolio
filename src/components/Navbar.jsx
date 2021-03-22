/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../assets/css/Navbar.css";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 98) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav
            className={
                `navbar navbar-expand-lg navbar-light fixed-top 
                ${navbar ? "navbar--active" : "nav--background"} `
            }
        >
            <div className="container">
                <a className="navbar-brand" href="#">RD</a>
                <button className={
                    `navbar-toggler 
                    ${navbar ? "navbar--active" : ""} `
                }
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
