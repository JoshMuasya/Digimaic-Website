import React from 'react'
import './solution.css'
import LOGO from '../../assets/images/DigimaticLogo.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                <h3>Solutions</h3>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<AiOutlinePlus />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                        <h2>Graphic Design</h2>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<AiOutlinePlus />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>
                        <h2>UI/UX Design</h2>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<AiOutlinePlus />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>
                        <h2>Website Development</h2>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<AiOutlinePlus />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>
                        <h2>Digital Marketing</h2>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </div>
        </div>
    </div>        
  )
}

export default Solution