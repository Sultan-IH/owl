
import ProjectListItem from './ProjectListItem';
import React, { Component } from 'react'
import NavigationBar from './NavigationBar';

export class ProjectList extends Component {
  render() {
    return (
        
      <div>
          <button type="button" class="btn btn-success btn-circle btn-xl"><i class="glyphicon glyphicon-link"></i>{" "}New Project</button>
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
