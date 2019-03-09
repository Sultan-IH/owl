import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class NavigationBar extends Component {
  render() {
    return (
      <div class="headerNav">
        <div class="topnav">
            {/* <Link class="active" to="/projects">Home</Link> */}
            <Link class="active"  to="/about">Home</Link>
            <Link class="active"  to="/projects">Available Projects</Link>
            <Link class="active"  to="/myProjects">My Projects</Link>
            <Link class="active"  to="/profile">Profile</Link>
            <Link class="active"  to="/newProject">New Project</Link>
            
            
        </div>
      </div>
    )
  }
}

export default NavigationBar
