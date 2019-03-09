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
                  <option>Non-Sponsored/</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Height sizing</h2>
            <form role="form">
              <div className="form-group">
                <input className="form-control input-lg" type="text" placeholder=".input-lg" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Default input" />
              </div>
              <div className="form-group">
                <input className="form-control input-sm" type="text" placeholder=".input-sm" />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Input groups</h2>
            <form role="form">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">@</span>
                  <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
                </div>
              </div> 
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-addon" id="basic-addon2">@example.com</span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                  <span className="input-group-addon">.00</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Button addons</h2>
            <form role="form">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                  <input type="text" className="form-control" placeholder="Search for..." />
                </div>{/* /input-group */}
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" className="form-control" aria-label="..." />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action <span className="caret" /></button>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="divider" />
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>{/* /btn-group */}
                </div>{/* /input-group */}
              </div>
            </form>
          </div>
        </div>
      </div>
      
    )
  }
}

export default CreateNewProject
