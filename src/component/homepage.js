import React from 'react';
import './homeStyle.css';

function NavigationBar() {
  return (
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
  );
}

export default NavigationBar;
