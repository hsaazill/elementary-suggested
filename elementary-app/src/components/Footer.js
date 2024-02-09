import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/Footer.css'; // Import your CSS file
import Logo from '../assets/images/elementary-white-logo.png';



const Footer = () => {
    return (
      <div>
       
        <div className="footer_container">
            <div className="grid">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#"></a></li>

                        <li><a href="#">Generate</a></li>
                        <li><a href="#"></a></li>

                        <li><a href="#">Support</a></li>
                        <li><a href="#"></a></li>

                        <li><a href="#">About</a></li>
                    </ul>       
                    <div className="logo-container">
                        {/* <!-- Replace "path/to/your/logo.png" with the actual path to your logo --> */}
                        <img src={Logo} alt="Logo" className="Logo"/>
                    </div>      
                </div>
                <div className="section-line"></div>   
                <p>All rights reserved @ 2023 </p>
                {/* <!-- //socmed icons here --> */}
                </div>
                </div>

      
    );
  };
  
  export default Footer;