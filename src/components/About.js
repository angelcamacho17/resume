import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="twelve columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                        <br></br>
                        <span>{resumeData.phone}</span>
                        <br></br>
                        <span>{resumeData.mail}</span>


       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}