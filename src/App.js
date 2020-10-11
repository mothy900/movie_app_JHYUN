import React from "react";
import { HashRouter, Route, } from "react-router-dom";
import Home from "./Home";
import Join from "./Join";
import Menu from "./Menu";
import Navigation from "./Navigation";

function App(){
  return(

  <HashRouter>
    <Navigation/>
    <Route path="/home" exact={true} component={Home}/>
    <Route path="/join" exact={true} component={Join}/>
    <Route path="/menu" exact={true} component={Menu}/>
  </HashRouter>
  );
}

export default App;