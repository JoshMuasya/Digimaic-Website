import React from 'react'
import './solution.css'
import LOGO from '../../assets/images/DigimaticLogo.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Dash from 'react-native-dash';

const Solution = () => {
  return (
    <div className="solutionback">
        <div className="solutionleft">
            <div className="solutionheading">
                <div className="headingtop">
                    <div className="headingour">
                        <h2>
                            OUR <br />
                        </h2>
                    </div>
                

                    <div className="headingimg">
                        <img src={LOGO} alt="Logo" />
                    </div>
                </div>

                <div className="headingsolution">
                    <h2>
                        SOLUTIONS
                    </h2>
                </div>
            </div>

            <div className="solutionbutton">
                <a href="">Solutions <AiOutlineArrowRight/></a>
            </div>
        </div>
        <div className="solutionright">
            
        </div>

        <div className="solutionbottom">
            <div className="solutionrect">
                <div className="soln">
                    <h3>Solutions</h3>

                        <div className="dash">
                            <Dash />
                        </div>

                </div>

                <div className="soln">
                    <h2>Graphics Designs</h2>
                </div>

                <div className="soln">
                    <h2>UI/UX Design</h2>
                </div>

                <div className="soln">
                    <h2>Website Development</h2>
                </div>

                <div className="soln">
                    <h2>Digital Marketing</h2>
                </div>
            </div>
        </div>
    </div>        
  )
}

export default Solution