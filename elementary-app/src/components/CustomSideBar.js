import React from 'react';
import { Link } from 'react-router-dom'; 
import '../components/CustomSideBar.css'; // Import your CSS file

const CustomSideBar = () => {
    return (
      <div>
       
       <body>
    <div class="CustomSideBar">
        <ul>
            <li><Link to="/button">button</Link></li>
            <li><Link to="/toggle">toggle</Link></li>
            <li><Link to="/radiobutton">radio</Link></li>
            <li><Link to="/inputbox">input box</Link></li>
            <li><Link to="/cards">cards</Link></li>
            <li><Link to="/footer">footer</Link></li>
            <li><Link to="/navbar">nav bar</Link></li>
            <li><Link to="/sidebar">sidebar</Link></li>
            <li><Link to="/table">tabler</Link></li>
            <li><Link to="/loader">loader</Link></li>
            <li><Link to="/form">form</Link></li>
        </ul>
    </div>
</body>
    


       
      </div>
      
    );
  };
  
  export default CustomSideBar;