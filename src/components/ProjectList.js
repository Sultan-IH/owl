
import ProjectListItem from './ProjectListItem';
import React, { Component } from 'react'
import NavigationBar from './NavigationBar';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class ProjectList extends Component {
  render() {
    return (
        
      <div>
        
          <div class="container">
		<div class="row">
			<div class="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
				<ul class="event-list">
          <ProjectListItem/>
        
          </ul>
          </div>
          </div>
          </div>
        
      </div>
    )
  }
}

export default ProjectList
