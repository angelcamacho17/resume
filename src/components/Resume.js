import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
      <section id="resume">
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns margint-btm">
                          <h3>{item.specialization}</h3>
                          <p className="info">
                          {item.UniversityName}
                          <span>&bull;</span> <em className="date">{item.MonthOfEntry} {item.YearOfEntry} - {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns margint-btm">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfEntry} {item.YearOfEntry} - {item.MonthOfLeaving} {item.YearOfLeaving} </em></p>
                          <br></br>
                          <ul>
                            
                          {item.Achievements && item.Achievements.map((achieve)=>{
                            return (<li>{achieve}</li>)
                            })
                          }
                          </ul>
                          <br></br>
                          <p>
                          <a href={item.Link} target="_blank">{item.Link}</a>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
        </section>
        <section id="skill">
         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="twelve columns skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.class.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>
        </section>
        <section id="language">
         <div className="row">

             <div className="three columns header-col">
                <h1><span>Languages</span></h1>
             </div>

             <div className="nine columns main-col">

                <p>
                {resumeData.languagesDescription}
                </p>

                    <div className="bars">

                       <ul className="languages">
                 {
                   resumeData.languages && resumeData.languages.map((item) => {
                     return(
                       <li>
                       <span className={`bar-expand ${item.languagename.toLowerCase()}`}>
                       </span><em>{item.languagename}</em>
                       </li>
                     )
                   })
                 }

                        </ul>

                    </div>

                </div>

          </div>
      </section>
      </div>
    );
  }
}