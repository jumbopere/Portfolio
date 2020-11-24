import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListStudent from './list-student';
import EditStudent from './edit-student';
import CreateStudent from './create-student';
import DeleteStudent from './delete-student';

const Jubs = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">School MERN App</Link>
          
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">List Student</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Student</Link>
              </li>
            </ul>
          
        </nav>
        <br />
        <Route path="/" exact component={ListStudent} />
        <Route path="/edit/:id" component={EditStudent} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/delete/:id" component={DeleteStudent} />
      </div>
    </Router>
  );
}

export default Jubs;