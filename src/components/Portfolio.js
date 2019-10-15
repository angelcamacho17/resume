import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Freelance Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
              <div className="eigth columns footer-widgets">
                <div className="portfolio-item-meta">
                  <div className="item-wrap">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <a href={item.link} target="_blank">{item.link}</a>
                        </div>
                  </div>
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}