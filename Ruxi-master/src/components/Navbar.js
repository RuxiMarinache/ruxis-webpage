import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { Portfolio } from "./Portfolio";
import Skills from "./Skills";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        Ruxi Marinache <i className="fas fa-certificate" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/About"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Portfolio"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Portfolio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/Skills"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Skills
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                to="/Weather"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Weather
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button> Click here </Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
