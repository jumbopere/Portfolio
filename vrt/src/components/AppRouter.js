import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/Ap';
import Header from '../components/Navbar';
import FilesList from '../components/FilesList';
import Footer from '../Footer'

const AppRouter = () => (
  <BrowserRouter>
  
    <div >
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={FilesList} path="/list" />
        </Switch>
      </div>
  <div className = "w3-bottom">
<Footer/>
  </div>
    
  </div>
  </BrowserRouter>
);

export default AppRouter;