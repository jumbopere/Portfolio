import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from '../Footer'
import ListStudent from './list-student';
import EditStudent from './edit-student';
import CreateStudent from './create-student';
import DeleteStudent from './delete-student';

const Jubs = () => {
  return ( 
    <Router>
      <div >

      
        <nav className="w3-bar w3-green">
          <Link to="/" className="w3-bar-item  w3-button ">School MERN App</Link>
          
            <ul className="w3-right">
              <li className="w3-bar-item">
                <Link to="/list" className="w3-button w3-mobile">List Student</Link>
              </li>
              <li className="w3-bar-item">
                <Link to="/create" className="w3-button w3-mobile">Create Student</Link>
              </li>
            </ul>
          
        </nav>
        
        
        <Route path="/list" exact component={ListStudent} />
        <Route path="/edit/:id" component={EditStudent} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/delete/:id" component={DeleteStudent} />
       
       <div className= "w3-bottom">
         <Footer/>
         </div>
      </div>
      

    </Router>
  );
}

export default Jubs;