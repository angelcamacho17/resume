import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Developed projects from scratch.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(

              <div className="eigth columns footer-widgets">
                <div className="portfolio-item-meta">
                  <div className="item-wrap">
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p className="no-margin-btm">{item.description}</p>
                          <h6 className="no-margin-btm">{item.technology}</h6>
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
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>projects I've collaborated with</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.involved && resumeData.involved.map((item)=>{
              return(

              <div className="eigth columns footer-widgets">
                <div className="portfolio-item-meta">
                  <div className="item-wrap">
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p className="no-margin-btm">{item.description}</p>
                          <h6 className="no-margin-btm">{item.technology}</h6>
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
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>projects Developed for practice</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.practice && resumeData.practice.map((item)=>{
              return(

              <div className="eigth columns footer-widgets">
                <div className="portfolio-item-meta">
                  <div className="item-wrap">
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p className="no-margin-btm">{item.description}</p>
                          <h6 className="no-margin-btm">{item.technology}</h6>
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