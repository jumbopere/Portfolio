import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Jubs from './student/Jubs'
import Home from './Home'
import AppRouter from './components/AppRouter'

function App() {
  return (

    <Router>
    <div className = "App">
      
        <Route exact path="/" component={ Home } />
     <Route exact path = "/students" component ={Jubs}/>
  <Route exact path = "/file" component ={AppRouter}></Route>
        
       
    </div>
  
  </Router>
  );
}

export default App;
