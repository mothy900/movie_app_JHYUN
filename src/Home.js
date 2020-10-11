import React from "react";
import "./App.css";
import "./Reset.css";
//import { withAuthenticator } from '@aws-amplify/ui-react'
//import axios from "axios";
//로그인 성공하면 Menu로 이동
//회원가입을 누르면 회원가입창으로 이동
// 로그인 화면 및 회원가입화면 만들고 있는데
// 이 전 화면이 사라지지 않고 같이 유지되는 현상을 없애기 위하여 renderList 를 추가함

class Home extends React.Component {
  /*componentDidMount() {
    //페이지 로드시 한번 실행
    this.inputSearchDate();
  }*/

  render() {
   
    return (
      <section className="login__container">
       
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

          </div>
        
      </section>
    );
  }
}

//export default withAuthenticator(App)
export default Home
