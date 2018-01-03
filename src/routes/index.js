// /**
//  * 路由配置（方便本地打包，使用了HashRouter）;
//  * tips:开发环境下面使用了browserHistory，打包上线的时候需要服务器进行配置;
//  */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../containers/Home/index';
// import Album from '../containers/Home/Album';
// import Player from '../containers/Play/Player'




const Routes = () => (
  <div className="app">

    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/album/:id" component={Album}/>
        <Route path="/play" component={Play}/> */}

        {/* <Route path='/404' component={NotFound} /> */}
        {/* <Redirect from='*' to='/404' /> */}

      </Switch>
    </Router>
  </div>
);

export default Routes;
