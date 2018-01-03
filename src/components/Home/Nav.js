import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../static/images/logo.png';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
       currentIndex : 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index){
    this.setState({
      currentIndex:index
    })
  }


  render() {
    return (
      <div className="navbar-wrapper">
        <div className="container">

          <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="top-nav">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#home">
                  <img  src={Logo} alt="logo"/>
                </a>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

              </div>

              <div className="navbar-collapse  collapse">
                <ul className="nav navbar-nav navbar-right scroll">
                  {
                    this.props.tabs.map((item,i) => (
                      <li className={this.state.currentIndex == i ? 'active' : ''} key={i} onClick={this.handleClick.bind(this,i)}>
                        <a href={`${item.path}`}>{item.text}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
        )
    }
};

Nav.defaultProps = {
  tabs:[
    {
      text: 'Home',
      path: '#home',
    },
    {
      text: 'About',
      path: '#about',
    },
    {
      text: 'Partners',
      path: '#partners',
    },
    {
      text: 'Contact',
      path: '#contact',
    },
  ]
}
