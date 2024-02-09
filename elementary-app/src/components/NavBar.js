import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/NavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-red-logo.png';
import { getCookie, isCookieExpired, removeCookie } from '../utils/cookies';


const NavBar = () => {
    const navigate = useNavigate();
    const user = getCookie("name")

    const handleLogout = () => {
        removeCookie("name")
        navigate("/login")
    }
    return (
        <div>

            <header>
                <nav>
                    <div id="NavBar">
                        <ul>
                            <li class="nav-left-container">
                                <img src={Logo} alt="Logo" className="Logo" />
                                <li><Link to="/home" class="home">home</Link></li>
                                <li><Link to="/customize" class="CustomizePage">generate</Link></li>
                                <li><Link to="/help" class="home">support</Link></li>
                                <li><Link to="/home" class="home">about</Link></li>
                            </li>

                            {user ?
                                <li class="nav-right-container right-links">
                                    <li><Link><p>{user}</p></Link></li>
                                    <li><button class="signin-button" onClick={handleLogout}>Logout</button>
                                    </li>
                                </li>
                                :
                                <li class="nav-right-container right-links">
                                    <li><Link to="/signup">sign up</Link></li>
                                    <li><Link to="/login" class="signin-button">sign in</Link></li>
                                </li>}
                        </ul>

                    </div>
                </nav>
            </header>




        </div>

    );
};

export default NavBar;