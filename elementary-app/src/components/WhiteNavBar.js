import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/WhiteNavBar.css'; // Import your CSS file
import Logo from '../assets/images/elementary-logo.png';


const WhiteNavBar = () => {
    return (
      <div>
       
    <header>
        <nav>
            <div id="WhiteNavBar">
                <ul>
                    <li class="nav-left-container">
                        <img src={Logo} alt="Logo" className="Logo"/>
                        <li><Link to="/home" class="home">home</Link></li>
                        <li><Link to="/home" class="home">generate</Link></li>
                        <li><Link to="/home" class="home">support</Link></li>
                        <li><Link to="/home" class="home">about</Link></li>
                    </li>

                    <li class="nav-right-container right-links">
                        <li><Link to="/signup">sign up</Link></li>
                        <li><Link to="/login" class="signin-button">sign in</Link></li>
                    </li>

                    
                </ul>
                
            </div>
        </nav>        
    </header>
    


       
      </div>
      
    );
  };
  
  export default WhiteNavBar;