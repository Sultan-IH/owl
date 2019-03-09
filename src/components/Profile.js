import React, { Component } from 'react'
import NavigationBar from './NavigationBar';

export class Profile extends Component {
  render() {
    return (
    
      <div>
        <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal">✕</button>
			        <h3>About Joe</h3>
			    </div>
            <div class="modal-body">
                    <center>
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R" name="aboutme" width="140" height="140" border="0" class="img-circle"/>
                    <h3 class="media-heading">Joe Sixpack <small>USA</small></h3>
                    <span><strong>Skills: </strong></span>
                        <span class="label label-warning">HTML5/CSS</span>
                        <span class="label label-info">Adobe CS 5.5</span>
                        <span class="label label-info">Microsoft Office</span>
                        <span class="label label-success">Windows XP, Vista, 7</span>
                    </center>
                    <hr/>
                    <center>
                    <p class="text-left"><strong>Bio: </strong><br/>
                       I'm a nice guy.</p>
                    <br/>
                    <p class="text-left"><strong>Interests: </strong><br/>
                       Making chicken.</p>
                    <br/>
                    <p class="text-left"><strong>Life Goals: </strong><br/>
                       Become a professional chef.</p>
                    <br/>
                    </center>
            </div>
            <div class="modal-footer">
                    <center>
                    {/* <button type="button" class="btn btn-default" data-dismiss="modal">I've heard enough about Joe</button> */}
                    </center>
            </div>
      </div>
    )
  }
}

export default Profile
