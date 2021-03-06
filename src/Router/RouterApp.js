import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Back from "../Pages/Back/Back"

function HomePage() {
  return <Home/>;
}


function RouterApp() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/back" exact component={Back}></Route>
      </div>
      </Router>
    );
  }

export default RouterApp;
