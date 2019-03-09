import React, { Component } from 'react'

export class CreateNewProject extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
          {/* <div className="col-xs-12">
            <p># Avoid using <span className="text-danger">select</span> elements here as they cannot be fully styled in WebKit browsers.</p>
          </div> */}
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-12">
            <h2>Create New Project</h2>
            <form role="form">
              <div className="form-group">
                <label htmlFor="exampleInput">Project Name</label>
                <input type="text" className="form-control" id="exampleInput" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Project Short Description</label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Select</label>
                <select className="form-control">
                  <option>Sponsored</option>
                  <option>Non-Sponsored</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Company/Individuals Name</label>
                <input type="text" className="form-control" id="exampleInput" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Location</label>
                <input type="text" className="form-control" id="exampleInput" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Number of people</label>
                <input type="number" className="form-control" id="exampleInput" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Date</label>
                <input type="date" className="form-control" id="exampleInput" />
              </div>
              
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Required Skills</h2>
            <div id="tags">
  <span className="tag">Photoshop</span>
  <span className="tag">Illustrator</span>
  <input type="text" defaultValue placeholder="Add a skill" />
</div>

           
          </div>
        </div>
       
        
      </div>
      
    )
  }
}

export default CreateNewProject
