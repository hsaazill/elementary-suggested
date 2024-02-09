import React from 'react';
import '../assets/css/homePage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    const state = location.state;

    return (
        <div>
            <NavBar user={state}/>


                {< body >
                {/* <!-------------------------1/3 SECTION start-------------------------> */ }
                < div class="openingText-container">
                <div class="rectangle-container">
                    <div class="elements-inside-shape">
                        <div class="text-column1">
                            <p>ui made  <b>simple</b></p>
                        </div>
                        <div class="text-column2">
                            <p id="typewriter-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt leo nisl, et varius justo tincidunt eget. Pellentesque at sodales orci. Suspendisse ut risus ut dolor maximus consectetur in a massa. Integer ultricies cursus ex et pellentesque. Aliquam tellus risus, hendrerit eu ex vel, semper sollicitudin metus.<span class="cursor">|</span></p>
                        </div>
                        <div class="button-column">
                            <p>get started <b>&darr;</b></p>
                        </div>
                    </div>
                </div>
        </div>

                {/* <!-------------------------1/3 SECTION end-------------------------> */ }


    {/* <!------------------------- 2/3 SECTION start-------------------------> */ }

    {/* <!-- 
    elements
    what are we making?
--> */}
                <div>
                    <div class="what-text">
                        <div class="elements-inner-text1">elements</div>
                        <div class="elements-inner-text2">what are we making?</div>
                    </div>

                </div>

                <div class="firstContainer-elements-grid">

                    <div class="element-container">
                        <div class="element-boxHolder">
                            <div class="box-content">
                                <div class="insides">
                                    <div class="element1">
                                        <div className="textsInElement">button
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="shape-label">button</p>
                    </div>

                    <div class="element-container">
                        <div class="element-boxHolder">
                            <div class="box-content">
                                <div class="insides">
                                    <div className="element2">

                                        <div className="textsInElement">on

                                        </div>
                                        <div className="offdesign">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="shape-label">toggle</p>
                    </div>
                    <div class="element-container">
                        <div class="element-boxHolder">
                            <div class="box-content">
                                <div className="element3">
                                    <div className="circle1">
                                        <div className="insides">
                                            <div className="smallercircle1">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle2">
                                        <div className="insides">
                                            <div className="smallercircle1">
                                                <div className="insides">
                                                    <div className='innercircle'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="shape-label">radio/checkbox</p>
                    </div>

                    <div class="element-container">
                        <div class="element-boxHolder">
                            <div class="box-content"></div>
                        </div>
                        <p class="shape-label">input box</p>
                    </div>
                    <div class="secondContainer-elements-grid">
                        <div class="element-container">
                            <div class="element-boxHolder">
                                <div class="box-content">
                                    <div class="insides">
                                        <div className="element5">
                                            <div class="mockup_logos">
                                                f G in
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="shape-label">footer</p>
                        </div>

                        <div class="element-container">
                            <div class="element-boxHolder">
                                <div class="box-content">
                                    <div class="insides">
                                        <div class="element6">
                                            <div className="textsInElement">home
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="shape-label">navbar</p>
                        </div>

                        <div class="element-container">
                            <div class="element-boxHolder">
                                <div class="box-content">
                                    <div class="insides">
                                        <div class="element7">
                                            <div className="textInSidebar">home</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="shape-label">side menu/bar</p>
                        </div>
                        <div class="element-container">
                            <div class="element-boxHolder">
                                <div class="box-content">

                                </div>
                            </div>
                            <p class="shape-label">table</p>
                        </div>
                    </div>
                </div>

                <div class="see-more-text">
                    <div class="see-more-text1"> see more &rarr;</div>
                </div>



    {/* <!------------------------- 2/3 SECTION end-------------------------> */ }

    {/* <!------------------------- 3/3 SECTION start-------------------------> */ }
    <div class="themes-section">
        <div class="text-themes">
            <p class="elements-inner-text1">themes</p>
            <p class="elements-inner-text2">how do you want your design?</p>
        </div>
        {/* <!-- BOX BOX BOX BOX--> */}
        <div class="four-themes-skeleton">
            <div class="theme1">
                <div class="label-strip"></div>
            </div>
            <div class="theme1">
                <div class="label-strip"></div>
            </div>
            <div class="theme1">
                <div class="label-strip"></div>
            </div>
            <div class="theme1">
                <div class="label-strip"></div>
            </div>
        </div>




    </div>









            </body >}

<Footer />
        </div >


    );
};

export default HomePage;