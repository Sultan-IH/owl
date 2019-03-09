
import React, { Component } from 'react'

export class ProjectListItem extends Component {
    // getStyle = () => {
    //     return {
    //         background: '#f4f4f4',
    //         padding: '10px',
    //         borderBottom: '1px #ccc dotted',
    //         textDecoration: this.props.todo.completed ? 
    //         'line-through' : 'none'
    //     }
    // }

    render() {
        // const {id, title} = this.props.todo; //destructuring
        return (
        
        <li>
            <time dateTime="2014-07-20">
                <span className="day">4</span>
                <span className="month">Jul</span>
                <span className="year">2014</span>
                <span className="time">ALL DAY</span>
            </time>
            <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
            <div className="info">
                <h2 className="title">Grilled Chicken Day</h2>
                <p className="desc">This project entails cooking grilled chicken</p>
                <p className="desc">Preferred Skills:{' '}
                    <span class="label label-warning">HTML5/CSS</span>
                    <span class="label label-info">Adobe CS 5.5</span></p>
                <p className="desc">Skills Required: {' '}
                    <span class="label label-info">Microsoft Office</span>
                    <span class="label label-success">Windows XP, Vista, 7</span></p>
            </div>
            <div className="social">
                <ul>
                <li className="facebook" style={{width: '33%'}}><a href="#facebook"><span className="fa fa-facebook" /></a></li>
                <li className="twitter" style={{width: '34%'}}><a href="#twitter"><span className="fa fa-twitter" /></a></li>
                <li className="google-plus" style={{width: '33%'}}><a href="#google-plus"><span className="fa fa-google-plus" /></a></li>
                </ul>
            </div>
            </li>

        
        )
  }
}

//PropTypes
// ProjectListItem.propTypes = {
//     todo: PropTypes.object.isRequired
// // }

// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right'
// }

export default ProjectListItem