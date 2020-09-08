import React from "react";
import Axios from "axios";
import Movie from "./Movie";
import "./App.css";
//import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    weeklyBoxOfficeList: [],
    date: "",
    totalAudi: "", //누적관객수 -> 예매율 계산 이거 Movie.js에서 불러내서 계산
  };

  handleChange = (e) => {
    //input text창에 데이터를 입력 받도록
    this.setState({
      date: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    // 엔터 누르면 값 입력 받도록하는 함수
    this.state.date.slice(0, 7);
    if (this.state.date.length === 8) {
      this.inputSearchDate();
      if (this.state.date) {
        this.getmovie();
      }
    }
  };

  inputSearchDate = (e) => {
    this.state.date.slice(0, 7); // 년도 숫자가 초과될 경우 8글자로 자른다.

    if (this.state.date) {
      this.getmovie();
    }
  };

  getmovie = async () => {
    const movieURL =
      "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&targetDt=";

    const finalURL = movieURL + this.state.date;
    console.log(finalURL);
    const {
      data: {
        boxOfficeResult: { weeklyBoxOfficeList },
      },
    } = await Axios.get(finalURL);
    let totalAudi;
    for (let i = 0; i < weeklyBoxOfficeList.length; i++) {
      totalAudi += parseInt(weeklyBoxOfficeList[i].audiCnt);
      console.log("first : " + totalAudi);
    }

    this.setState({ weeklyBoxOfficeList, isLoading: false, totalAudi });
    console.log("load :" + totalAudi);
    /*const requestURL =
      //http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&targetDt=20120101"
      const movieInfo = await fetch(requestURL);
      */
  };

  /*componentDidMount() {
    //페이지 로드시 한번 실행
    this.inputSearchDate();
  }*/

  render() {
    // const { weeklyBoxOfficeList } = this.state;
    //console.log(weeklyBoxOfficeList);
    const { isLoading, weeklyBoxOfficeList, totalAudi } = this.state;
    console.log("totalAudi : " + totalAudi);
    return (
      <section className="container">
        <h1>Display Weekly Boxoffice Ranking</h1>
        {isLoading ? (
          <div className="loader">
            <h3>Input SearchDate </h3>
            <input
              className="loader__serchbar"
              placeholder="Serch Date YYYYMMDD"
              value={this.state.date}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        ) : (
          <div className="movies">
            {weeklyBoxOfficeList.map((movie) => (
              <Movie
                key={movie.movieCd}
                id={movie.movieCd}
                rank={movie.rank}
                movieNm={movie.movieNm}
                openDt={movie.openDt}
                audiAcc={movie.audiAcc}
                audiCnt={(movie.audiCnt / totalAudi) * "100"}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
