import React from 'react';
import Footer from '../../Navbar/Footer';
import './style.css'

const Projects = () => {
    return (
        <div className="mainContent">            
            <div id="con2">
                <div className="zayn_2 shadow">
                <span className="pop">Popular</span> <span className="date">July 2017</span>

                <div className="overlay"></div>


                <h4>He is not a lover who does not love forever.</h4>
                </div>


                <div className="zayn_3 shadow">
                <span className="lat">latest</span> <span className="date">July 2017</span>

                <div className="overlay"></div>


                <h4>Show me your garden and I shall tell you what you are.</h4>
                </div>
            </div>


            <div id="con3">
                <div className="zayn_4 shadow">
                <span className="free">Free</span> <span className="date-1">July 2017</span>

                <div className="overlay"></div>


                <h4>All theory, dear friend, is gray, but the golden tree of life springs
                ever green.</h4>
                </div>
            </div>
            <Footer/>
                </div>
    )
}

export default Projects
