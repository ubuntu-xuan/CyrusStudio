import React, {Component} from 'react';


let myimage = require("../../static/images/portfolio/1.jpg");

export default class About extends Component{

  render() {
    return (
        <div id="about"  className="container spacer about">
          <h2 className="text-center wowload fadeInUp animated">Creative digital agency based on London</h2>
          <div className="row">
            <div className="col-sm-6 wowload fadeInLeft animated">
              <h4><i className="fa fa-paint-brush"></i> Design</h4>
              <p>Creative digital agency for sleek and sophisticated solutions for mobile, websites and software designs, lead by passionate and uber progressive team that lives and breathes design. Creative digital agency for sleek and sophisticated solutions for mobile, websites and software designs.</p>
            </div>
            <div className="col-sm-6 wowload fadeInRight">
              <h4><i className="fa fa-code"></i> Frontend & Backend Development</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div className="process">
            <h3 className="text-center wowload fadeInUp">Process</h3>
            <ul className="row text-center list-inline  wowload bounceInUp">
              <li>
                <span><i className="fa fa-history"></i><b>Research</b></span>
              </li>
              <li>
                <span><i className="fa fa-puzzle-piece"></i><b>Plan</b></span>
              </li>
              <li>
                <span><i className="fa fa-database"></i><b>Develop</b></span>
              </li>
              <li>
                <span><i className="fa fa-magic"></i><b>Integration</b></span>
              </li>
              <li>
                <span><i className="fa fa-cloud-upload"></i><b>Deliver</b></span>
              </li>
            </ul>
          </div>

          <div className="myimage container">

            
            <img src={myimage} />
          </div>

        </div>
    )
  }

}
