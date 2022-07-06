import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contactus">
          <div className="title">
            <h2>Contact <span>Us</span></h2>
          </div>
          <div className="boxes">
            <div className="leftbox">
              <div className="leftcontent">
                <h3>
                  HEAD OFFICE
                </h3>

                <p>
                  Westlands Commercial Center
                </p>

                <p>
                  +254 798 040 353
                </p>

                <p>
                  digimaticmarketers@gmail.com
                </p>

              </div>
            </div>

            <div className="rightbox">
              <div className="rightcontent">
              <form>
                <div className="namesubject">
                  <input type="text" name='name' placeholder='Name' required />
                  <input type="subject" name='subject' placeholder='Subject' required />
                </div>
                <input type="email" name='email' placeholder='Email' required />
                <textarea name="message" rows="8" placeholder='Message' required ></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>

              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact