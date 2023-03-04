import React from 'react';
import '../css/homeStyle.css';

function NavigationBar() {
  return (
  <div>
    <nav>
      <a href="/">Home</a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>

    <div id="mainBody"> <p> We are under construction..</p></div>
    
  </div>
  );
}

export default NavigationBar;
