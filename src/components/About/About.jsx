import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about" id='about'>
        <div className="innerabout">
            <div className="leftabout">
              <div className="aboutus">
                <h2>About Us</h2>
                <p>
                  Digimatic Marketers is a <br />
                  digital marketing company <br /> 
                  that targets mostly the startup <br />
                  companies and holds their <br />
                  hand as they start their <br />
                  venture into the online world.
                </p>
              </div>

              <div className="more">
                <p>
                  We do offer everything needed for a company <br />
                  to enter into the online world from <br />
                  Graphic Design, <br />
                  Website Design and Development, <br />
                  Digital Marketing, <br />
                  Brand Building among others.
                </p>
              </div>

            </div>

            <div className="rightabout">
              <div className="leftright">
                <div className="graphicdesign">
                  <h3>Graphic Design</h3>
                </div>
              
                <div className="websitedesign">
                  <h3>Website Design and Development</h3>
                </div>
              </div>

              <div className="rightright">
                <div className="digitalmarketing">
                  <h3>Digital Marketing</h3>
                </div>

                <div className="brandbuilding">
                  <h3>Brand Building</h3>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About