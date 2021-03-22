import React from "react";
import Typed from "react-typed";
import "../assets/css/Header.css";
const Header = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h5>Hello</h5>
                <h2>I am Rodrigo Diaz</h2>
                <Typed
                    className="typed-text"
                    strings={["Java Developer", "React Novice", "Amateur Web Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header;
