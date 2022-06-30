import React from 'react'
import './home.css'
import Laptop from '../../assets/images/LandingpageSide.jpg'
import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div className="homecontainer" id='home'>
        <div className="homeback">

            <Nav />

            <div className="main">
                <div className="mainleft">
                    <div className="cname">
                        <h1>DIGIMATIC MARKETERS</h1>
                    </div>
                    <div className="tagline">
                        <h3>
                            A fresh start for your Business <br />
                            in the digital world.
                        </h3>
                    </div>

                    <div className="buttons">
                        <div className="aboutbtn">
                            <a href="#" className="aboutus">About Us</a>
                        </div>

                        <div className="contactbtn">
                            <a href="#" className="contactus">Contact Us</a>
                        </div>
                    </div>
                </div>

                <div className="mainright">
                    <img src={Laptop} alt="Laptop" className="rightimage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home