import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">\
             <div className="gpt3__header-content">
                 <h1 className="gradient__text">
                     Let's Build Something amazing with React.
                 </h1>
                 <p >Why not you make a modern ui using react just show your creativity. React is a javaScript best framework to make a web application.  </p>
                 <div className="gpt3__header-content__input">
                     <input type="email" placeholder="Your Email address" />
                     <button type="button">Get Started</button>
                 </div>

                 <div className="gpt3__header-content__people">
                     <img src={people} alt="people" />
                     <p>1,600 people try to learn a react in 24 hours </p>
                 </div>

             </div>
                 <div className="gpt3__header-image">
                     <img src={ai} alt="ai" />
                 </div>
        </div>
    )
}

export default Header
