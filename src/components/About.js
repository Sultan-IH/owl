import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">OWL</h1>
        <p class="lead text-muted"class="desc">Connecting Communities</p>
        <p>
          <a href="#" class="btn btn-primary">Contact us</a>
          <a href="#" class="btn btn-secondary">Help</a>
        </p>
        <p></p>
        {/* <h2 class="titles">Who we are</h2>
        <p class="desc">Facebook hackers</p> */}
        <h2 class="titles">What we do</h2>
        <p class="desc">We create a platform to connect people who wish to collaborate on 
            similar interests. Companys/Individuals can sponsor projects that individuals 
            with the required skills can contribute to.</p>
        <img src="https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F16096.jpg%3Fv%3De7619af4a2d0f77ea20a926ecc96ef3f15bec659f629e29195b8b1abbf5af147&h=367&prog=1"/>
      </div>
    </section>
      </div>
    )
  }
}

export default About
