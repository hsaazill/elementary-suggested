import React from 'react';
import '../../assets/css/customizePage.css'; 
import NavBar from '../../components/NavBar'; 
import Footer from '../../components/Footer';
import CustomSideBar from '../../components/CustomSideBar';
import '../../components/CustomSideBar.css';
import { useState, useEffect, useRef } from 'react';
import uploadIcon from '../../assets/images/upload-icon.png';



const TablePage = () => {
    const [buttonColor, setButtonColor] = useState('#808080'); // gray
    const [textColor, setTextColor] = useState('#ffffff'); // white text
    const [generatedHtml, setGeneratedHtml] = useState('');
    const buttonRef = useRef();
    const [isDropShadowChecked, setDropShadowChecked] = useState(false);
    const [isStrokeChecked, setStrokeChecked] = useState(false); 
    const [textSize, setTextSize] = useState(16);
    const [borderRadius, setBorderRadius] = useState(50); // Default border radius


    //for table page
    const [tableRowCount, setTableRowCount] = useState(3);
    const [tableColumnCount, setTableColumnCount] = useState(3);

    useEffect(() => {
        let htmlCode = `<table style={{ borderCollapse: 'collapse', width: '100%' }}>`;
    
        // Add table headers
        htmlCode += `<thead><tr>`;
        for (let colIndex = 1; colIndex <= tableColumnCount; colIndex++) {
            htmlCode += `<th>Header ${colIndex}</th>`;
        }
        htmlCode += `</tr></thead>`;
    
        // Add table body
        htmlCode += `<tbody>`;
        for (let rowIndex = 1; rowIndex <= tableRowCount; rowIndex++) {
            htmlCode += `<tr>`;
            for (let colIndex = 1; colIndex <= tableColumnCount; colIndex++) {
                htmlCode += `<td>Row ${rowIndex}, Cell ${colIndex}</td>`;
            }
            htmlCode += `</tr>`;
        }
        htmlCode += `</tbody>`;
    
        htmlCode += `</table>`;
    
        setGeneratedHtml(htmlCode);
    }, [tableRowCount, tableColumnCount]);
    

    const handleTextColorChange = (event) => {
      // Update text color
    setTextColor(event.target.value);
    };
    //checkboxes status
    const handleCheckboxChange = (checkboxName) => {
        switch (checkboxName) {
        case 'dropShadow':
            setDropShadowChecked(!isDropShadowChecked);
            break;
        case 'stroke':
            setStrokeChecked(!isStrokeChecked);
            break;
          // Add more cases for other checkboxes if needed
        default:
            break;
        }
    };
      //border radius
    const handleBorderRadiusChange = (event) => {
        // Update border radius
        setBorderRadius(event.target.value);
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
            <table style={{ borderCollapse: 'collapse', width: '80%' }}>
                <tbody>
                    {Array.from({ length: tableRowCount }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: tableColumnCount }).map((_, colIndex) => (
                                <td key={colIndex} style={{ border: '1px solid #000', padding: '8px' }}></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            <div className="adjust">
                <ul className="checkboxes">
                    <li><label><input  type="checkbox" checked={isDropShadowChecked} onChange={() => handleCheckboxChange('dropShadow')} name="dropShadow"/> drop shadow</label></li>
                    <li><label><input type="checkbox" checked={isStrokeChecked} onChange={() => handleCheckboxChange('stroke')} name="stroke"/> stroke</label></li>                    <li><label><input type="checkbox" name="image"/> image </label>
                        <button className="uploadImageButton"> UPLOAD <img src={uploadIcon} alt="Icon Placeholder" className="iconPlaceholder" /> </button>
                    </li>
                    <li><label><input type="checkbox" name="label"/> label</label></li>
                </ul>
                    
                <div class="sliders">
                    <label for="rowCountSlider">Rows</label> <br/>
                    <input type="range" id="rowCountSlider" min="1" max="10" value={tableRowCount} onChange={(e) => setTableRowCount(e.target.value)} />

                    <label for="columnCountSlider">Columns</label> <br/>
                    <input type="range" id="columnCountSlider" min="1" max="10" value={tableColumnCount} onChange={(e) => setTableColumnCount(e.target.value)} />
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

export default TablePage;