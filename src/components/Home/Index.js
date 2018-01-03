import React, {Component} from 'react';
import Nav from '../../components/Home/Nav';
import Figure from '../../components/Home/Figure';
import About from '../../components/Home/About';

export default class extends Component {

  render() {
    return (
      <div className="content">
        <div className="topbar animated fadeInLeftBig"></div>
        <Nav {...this.props}/>
        {/* 必须在调用组件时传入{...this.props}，才能显示所有完整的state */}
        <Figure />
        <About />
      </div>
    )
  }
}
