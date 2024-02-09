import React from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';
import { useState, useEffect, useRef } from 'react';
import uploadIcon from '../../assets/images/upload-icon.png';

const ToggleButtonPage = () => {
  const [toggleColor, setToggleColor] = useState('#808080'); // Corrected variable name
  const [textColor, setTextColor] = useState('#ffffff'); // white text
  const [generatedHtml, setGeneratedHtml] = useState('');
  const toggleRef = useRef();
  const [isDropShadowChecked, setDropShadowChecked] = useState(false);
  const [isStrokeChecked, setStrokeChecked] = useState(false);
  const [size, setSize] = useState(16);
  const [borderRadius, setBorderRadius] = useState(50);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Update the generated HTML
    const boxShadowStyle = isDropShadowChecked ? 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);' : '';
    const borderStyle = isStrokeChecked ? '2px solid black' : 'none';
    const htmlCode = `<input type="checkbox" class="toggle" style="width: ${size}px; height: ${size}px; background: ${toggleColor}; border-radius: ${borderRadius}px; ${boxShadowStyle} ${borderStyle}" />`;
    setGeneratedHtml(htmlCode);
  }, [toggleColor, textColor, isDropShadowChecked, isStrokeChecked, size, borderRadius]);

  const handleToggleColorChange = (event) => {
    // Update toggle color
    setToggleColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    // Update text color
    setTextColor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
        <NavBar/>


        
    
    <div className="content">   

        <div class="CustomSideBar">
        <ul>
            <li><a href="button">button</a></li>
            <li><a href="toggle">toggle</a></li>
            <li><a href="radiobutton">radio button</a></li>
            <li><a href="inputbox">input box</a></li>
            <li><a href="cards">cards</a></li>
            <li><a href="footer">footer</a></li>
            <li><a href="navbar">navbar</a></li>
            <li><a href="sidebar">sidebar</a></li>
            <li><a href="table">table</a></li>
            <li><a href="loader">loader</a></li>
            <li><a href="form">form</a></li>
        </ul>
    </div>
        <div className="page_generator">
          <div className="preview_container">
            <input type="checkbox" className="togglePreview"
              style={{display: 'none' /* Hide the actual checkbox */}}
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />

            <div class="toggle-track"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: toggleColor,
                borderRadius: `${borderRadius}px`,
                }} 
              >
              <div class="toggle-thumb"
              style={{
                background: '#fff',
                borderRadius: '50%',
                position: 'absolute',
                height: '26px',
                width: '26px',
                top: '4px',
                left: '4px',
                transition: 'transform 0.3s ease',
                left: isChecked ? '30px' : '4px', // Adjust the left position based on the checked state
                }} ></div>

            </div>

          </div>
            <div className="adjust">
                <ul className="checkboxes">
                    <li><label><input  type="checkbox" checked={isDropShadowChecked}  name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" checked={isStrokeChecked}  name="stroke"/> stroke</label></li>                    <li><label><input type="checkbox" name="image"/> image </label>
                        <button className="uploadImageButton"> UPLOAD <img src={uploadIcon} alt="Icon Placeholder" className="iconPlaceholder" /> </button>
                    </li>
                    <li><label><input type="checkbox" name="label"/> label</label></li>
                </ul>
                    
                <div class="sliders">
                <label for="sizeSlider">size</label> <br/>
                    <input type="range" id="sizeSlider" min="8"
                    max="80" value={size} onChange={handleSizeChange} 
                    />
                        
                    <label for="borderRadiusSlider">border radius</label> <br/>
                    <input type="range" id="borderRadiusSlider" min="0"
                    max="100"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(e.target.value)}/>

                    <label>text color</label> <br/>
                    <input
                        type="color"
                        id="txtColorPicker"
                        value={textColor} // change textColor state
                        onChange={handleTextColorChange} // Update the buttonColor state on change
                    /> 

                    <label for="colorSlider">color</label> <br/>
                    <input
                        type="color"
                        id="btnColorPicker"
                        value={setToggleColor} // Use the dynamic buttonColor state
                        onChange={handleToggleColorChange} // Update the buttonColor state on change
                    />                
                </div>
            </div>
            <div class="generatedCode-container">
                <p>{generatedHtml}</p>
            </div>
        </div>
    </div>











    

    <Footer/>
    </div>

    
);
};


export default ToggleButtonPage;