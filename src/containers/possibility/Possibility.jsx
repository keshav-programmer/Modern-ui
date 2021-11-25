import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">
                    The possibility are beyond your imagination
                </h1>
                <p>You make a modern website using react like single page application also named for spa websites and give all user better experience.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
