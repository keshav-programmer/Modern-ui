import React from 'react'
import { Feature } from '../../components';
import './whatModernUi.css';

const WhatModernUi = () => {
    return (
      
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature title="What is React" text="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications." />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature title="Declarative" text="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug." />
          <Feature title="Component-Based" text="Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM." />
          <Feature title="Learn Once, Write Anywhere" text="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native." />
        </div>
      </div>

    )
}

export default WhatModernUi
