import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want step into future before others.
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <h1>React</h1>
                    <p>All rights reserved to Keshav gupta authority.</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Kanpur, Up</p>
                    <p>0123456789</p>
                    <p>xyz@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2021 React. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
