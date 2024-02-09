import React from 'react';
import '../assets/css/helpPage.css'; 
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const HelpPage = () => {
  return (

    <div>
    <NavBar/>
      {<body>
        
    <div className="upperarea">
        <div className="ContactUs_background">
            <div className="introtexts">
                <div className="ContactUs"> contact us</div>
                <div className="getintouch_text">get in touch with our developers and let us know how we can help</div>
            </div>
        </div>
        <div className ="redirectBoxes">
            
            <div className = "salesbox">
                <div className='go_arrow'>&rarr;</div>
                <div className='textin_sales'>
                    <div className='salestext'>sales</div>
                    <div className='secondarytext'>get in touch with our sales </div>
                    <div className='secondarytext'>to see how we can work together</div>

                </div>
            </div>
            <div className='gitbox'>
            <div className='go_arrow'>&rarr;</div>
            <div className='textin_git'>
                    <div className='githubtext'>GitHub</div>
                    <div className='secondarytext'>check our repository:</div>
                    <div className='linkfor_Git'>https://github.com/orgs/Team-RuBees/repositories</div>
                </div>
            </div>
        </div>
        <div className="endingTexts">
            <div className="end1">For any concerns please reach us at </div>
            <div className='end2'>rubees-dev@gmail.com</div>
        </div>










    </div>
    










    </body>}

    <Footer/>
    </div>

    
  );
};

export default HelpPage;