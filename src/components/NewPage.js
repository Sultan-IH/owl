import React, { Component } from 'react'

export class NewPage extends Component {

    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="inputEmail" className="control-label col-xs-2">Event Name</label>
                    <div className="col-xs-10">
                        <input type="eventName" className="form-control" id="eventName" placeholder="Add a short, clear name..." />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Location</label>
                    <div className="col-xs-10">
                        <input type="location" className="form-control" id="location" placeholder="Include a place or address..." />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Description</label>
                    <div className="col-xs-10">
                        <input type="location" className="form-control" id="location" placeholder="Tell people about your event..." />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Category</label>
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Enter start time</label>
                    <input type="dateStart" name="dateStart" max="1979-12-31" className="form-control" />
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Enter end time</label>
                    <input type="dateEnd" name="dateEnd" min="2000-01-02" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="inputPassword" className="control-label col-xs-2">Skills</label>
                    <div className="col-xs-10">
                        <div id="tags">
                            <span class="tag">Photoshop</span>
                            <span class="tag">Illustrator</span>
                            <input type="text" value="" placeholder="Add a skill" />
                        </div>
                    </div>

                </div>

                <div className="form-group">
                    <div className="col-xs-offset-2 col-xs-10">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>

            </form>


        )

        
    }
}


export default NewPage

