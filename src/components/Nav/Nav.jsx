import React from 'react'
import './nav.css'
import Logo from '../../assets/images/DigimaticLogo.png'
import Line from '../../assets/images/NavLine.png'

const Nav = () => {
  return (
    <nav className="topnav">
        <div className="top">
            <div className="topleft">
                <div className="logo">
                    <a href="/"><img className="toplogo" src={Logo} alt="Logo" /></a>
                </div>

                <div className="companyname">
                    <h2>DIGIMATIC MARKETERS</h2>
                    <h4>Help us Build your Brand</h4>
                </div>
            </div>
            
            <div className="topright">
                <div className="navlinks">
                    <a href="#">Home</a>
                </div>
                <div className="navline">
                    <img src={Line} alt="Line" />
                </div>

                <div className="navlinks">
                    <a href="#">About</a>
                </div>
                <div className="navline">
                    <img src={Line} alt="Line" />
                </div>

                <div className="navlinks">
                    <a href="#">Blog</a>
                </div>
                <div className="navline">
                    <img src={Line} alt="Line" />
                </div>
                
                <div className="navlinks">
                    <a href="#">Projects</a>
                </div>
                <div className="navline">
                    <img src={Line} alt="Line" />
                </div>

                <div className="navlinks">
                    <a href="#">Services</a>
                </div>
                <div className="navline">
                    <img src={Line} alt="Line" />
                </div>
                
                <div className="navlinks">
                    <a href="#">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav