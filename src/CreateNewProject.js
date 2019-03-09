import React, { Component } from 'react'

export class CreateNewProject extends Component {

    constructor(props) {
        super(props);

        this.state = {
        profit: 0,
        picture: "http://placehold.it/32x32",
        name: "",
        location: "",
        main_organiser: "",
        num_people: 0,
        date: "",
        skills: [],
        sponsor_companies: []
        };
    
        this.changeAttr = this.changeAttr.bind(this)
        this.submitForm = this.submitForm.bind(this)

        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      profit(event) {
        this.setState({profit: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      changeAttr(event) {
          let attribute = event.target.id
          console.log(attribute + " : " + event.target.value);
          this.setState({attribbute: event.target.value})
      }
      submitForm(event){
        event.preventDefault();

        fetch("http://localhost:9009/projects", {method: "POST", json: this.state})
        .then(project => console.log(project))
        .catch(err => console.error(err))

      }
    
  render() {
    return (
        <div className="container">
        <form name="myForm"  method="post" onSubmit={this.submitForm}>
        <div className="row">
          {/* <div className="col-xs-12">
            <p># Avoid using <span className="text-danger">select</span> elements here as they cannot be fully styled in WebKit browsers.</p>
          </div> */}
        </div>
        <br/>
        <div className="row">
          <div className="col-xs-12">
            <h2>Create New Project</h2>
          
              <div className="form-group">
                <label htmlFor="exampleInput">Project Name</label>
                <input type="text" className="form-control" id="name"  onChange={this.changeAttr}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Project Short Description</label>
                <textarea className="form-control" rows={3} defaultValue={""} id="desc" onChange={this.changeAttr}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Select</label>
                <select className="form-control" id="sponsored" onChange={this.changeAttr}>
                  <option>Sponsored</option>
                  <option>Not-Sponsored</option>
                </select >
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Company/Individuals Name</label>
                <input type="text" className="form-control"id="sponsor_companies" onChange={this.changeAttr}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Location</label>
                <input type="text" className="form-control"id="location"  onChange={this.changeAttr}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Number of people</label>
                <input type="number" className="form-control"  id="num_people"  onChange={this.changeAttr}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInput">Date</label>
                <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.changeAttr}/>
              </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h2>Required Skills</h2>
  
                <div id="tags">
                    <span className="tag">Photoshop</span>
                    <span className="tag">Illustrator</span>
                    <input type="text" defaultValue placeholder="Add a skill" id="skills"  onChange={this.changeAttr}/>
                </div>

            
          </div>
        </div>
        <br/>
        <input class="form-submit-button" type="submit" value="Submit"></input>
        </form>
       
        
      </div>
      
    )
  }
}



export default CreateNewProject
