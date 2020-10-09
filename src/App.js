import React from "react";
import Join from "./Join";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./Reset.css";
//import axios from "axios";
//로그인 성공하면 Menu로 이동
//회원가입을 누르면 회원가입창으로 이동
// 로그인 화면 및 회원가입화면 만들고 있는데
// 이 전 화면이 사라지지 않고 같이 유지되는 현상을 없애기 위하여 renderList 를 추가함

class App extends React.Component {
  /*componentDidMount() {
    //페이지 로드시 한번 실행
    this.inputSearchDate();
  }*/
  state = {
    renderList: null,
  };
  componentDidMount() {
    this.setState({
      renderList: false,
    });
  }
  handleClick(searchTerm) {
    this.setState({ renderList: true });
    this.fetchItems(searchTerm);
  }
  render() {
    const { renderList } = this.state;
    console.log(renderList);
    return (
      <section className="login__container">
        {renderList ? (
          <div className="login">
            <input
              type="email"
              className="login__id"
              placeholder="Input your ID mail"
            />
            <input
              className="login__password"
              placeholder="Input your Password"
              type="password"
            />
            <input type="submit" value="Log in"></input>

            <Router>
              <div className="login-wrapper">
                <ul>
                  <Link to="/movie_app_kofic/Join">
                    <li>Sign Up</li>
                  </Link>
                </ul>
              </div>
              <div className="Contents-wrapper">
                <Switch>
                  <Route path="/movie_app_kofic/Join" component={Join} />
                </Switch>
              </div>
            </Router>
          </div>
        ) : null}
      </section>
    );
  }
}

export default App;
