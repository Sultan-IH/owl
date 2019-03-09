import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class NavigationBar extends Component {
  render() {
    return (
      <div class="headerNav">
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <Link to="/projects">Project List</Link>
            <Link to="/profile">Profile</Link>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
      </div>
    )
  }
}

export default NavigationBar
