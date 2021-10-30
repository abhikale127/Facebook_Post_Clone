import React from "react";
import './Styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home"


function App() {
  return (
    
    <Router>
    
    {/* <Navbar /> */}
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route> 
      <Redirect to="/" />
    </Switch>

    
  </Router>


  );
}

export default App;
