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
  };

  handleChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    this.state.date.slice(0, 7);
    if (this.state.date.length === 8) {
      this.inputSearchDate();
      if (this.state.date) {
        this.getmovie();
      }
    }
  };

  inputSearchDate = (e) => {
    this.state.date.slice(0, 7);

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

    this.setState({ weeklyBoxOfficeList, isLoading: false });
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
    const { isLoading, weeklyBoxOfficeList } = this.state;
    return (
      <section className="container">
        <h1>Display Weekly Boxoffice Ranking</h1>
        {isLoading ? (
          <div className="loader">
            <h3>Input SearchDate </h3>
            <input
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
                rank={movie.rank}
                movieNm={movie.movieNm}
                openDt={movie.openDt}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
