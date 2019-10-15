import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div >
                <h4 style={{color:'#fff', fontFamily:'sans-serif '}}>Mail : <h6 style={{color:'#bfbebb', fontFamily:'sans-serif '}}>{resumeData.mail}</h6></h4>
                <h4 style={{color:'#fff', fontFamily:'sans-serif '}}>Phone Number : <h6 style={{color:'#bfbebb', fontFamily:'sans-serif '}}>{resumeData.phone}</h6></h4>

              </div>
            </aside>
          </div>
        </section>
        );
  }
}