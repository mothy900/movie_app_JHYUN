import React from "react";
import Search from "./Search";
import Rank from "./Rank";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./Reset.css";
import "./Search.css";
//import axios from "axios";

class App extends React.Component {
  /*componentDidMount() {
    //페이지 로드시 한번 실행
    this.inputSearchDate();
  }*/

  render() {
    return (
      <Router>
        <div className="Menu-wrapper">
          <ul>
            <Link to="/movie_app_kofic/rank">
              <li>Rank</li>
            </Link>
            <Link to="/movie_app_kofic/search">
              <li>Search</li>
            </Link>
          </ul>
        </div>
        <div className="Contents-wrapper">
          <Switch>
            <Route path="/movie_app_kofic/rank" component={Rank} />
            <Route path="/movie_app_kofic/search" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
