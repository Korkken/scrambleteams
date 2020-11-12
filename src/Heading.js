import './App.css'
import React, { useState } from 'react';
import group from './icon/Group32.png'

function Heading() {
  const [showArrow, setshowArrow] = React.useState(false)
  const onClick = () => setshowArrow(!showArrow)
    return (
      <div className="top-pic">
          <div className="holy-logo"><img className="logo" src={group}></img></div>
        <div className="heading">
          <div className="main-heading">
           <span>Like scrambled eggs, </span>
           <span>but scrambled teams!</span>
          </div>
          <div className="sub-heading">
            <span>
              Free, fast and super easy team scrambler. Enter a list of names,
            </span>
            <span>
              pick the number of teams, and let us generate the teams for you.
            </span>
          </div>
          <div className="guide-wrapper">
            <div className="heading-buttons">
              <button className="green-button">Get Started!</button>
              <button className="transparent-button" onClick={onClick}>How does this work?</button>
            </div>
            {showArrow ? <div className="arrow"></div> : null }
          </div>
        </div>
      </div>
    )
}

export default Heading;