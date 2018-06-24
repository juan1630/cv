import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  Home from './home';
import Back from './back/index';
import Front from './front/index';
import Db from './db/index';
import Others from './others/index'

export default () => {
  return (
    <Router>
        <div className="frame">
            <Route exact path="/" component={Home}/>
           <Switch>
                <Route  path="/front-end" component={Front}/>
                <Route  path="/back-end" component={Back}/>
                <Route  path="/db" component={Db}/>
                <Route path="/others" component={Others}/>
           </Switch>
      </div>
    </Router>
  )
}
