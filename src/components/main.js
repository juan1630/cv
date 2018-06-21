import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const main = () => {
  return (
      <Router>
    <nav >
      <ul className="main">
          <li><Link to="/front-end">Front-end</Link> </li>
          <li><Link to="/back-end">Back-end</Link></li>
          <li><Link to="/db">Data base</Link></li>
          <li><Link to="/others">Others</Link></li>
      </ul>
    </nav>
    </Router>
  )
}

export default main;