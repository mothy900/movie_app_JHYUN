import React from "react";
import Axios from "axios";
import Movie from "./Movie";

class Rank extends React.Component {
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
    const {
      data: {
        boxOfficeResult: { weeklyBoxOfficeList },
      },
    } = await Axios.get(finalURL);
    let totalAudi = 0;
    for (let i = 0; i < weeklyBoxOfficeList.length; i++) {
      totalAudi = totalAudi + parseInt(weeklyBoxOfficeList[i].audiCnt);
    }

    this.setState({ weeklyBoxOfficeList, isLoading: false, totalAudi });
    /*const requestURL =
          //http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&targetDt=20120101"
          const movieInfo = await fetch(requestURL);
          */
  };
  render() {
    const { isLoading, weeklyBoxOfficeList, totalAudi } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="homepage">
            <div className="homepage__title">
              <span>Display Weekly Boxoffice Ranking</span>
            </div>
            <div className="homepage__loader">
              <h3>Input SearchDate </h3>
              <input
                className="loader__serchbar"
                placeholder="Serch Date YYYYMMDD"
                value={this.state.date}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div>
        ) : (
          <div className="movies">
            <div className="movie__title">
              <div className="movie__title_font movie__rank">Rnaking</div>
              <div className="movie__title_font movie__name">영화 제목</div>
              <div className="movie__title_font movie__date">개봉 날짜</div>
              <div className="movie__title_font movie__rate">예매율</div>
              <div className="movie__title_font movie__cnt">누적 관객 수</div>
            </div>
            {weeklyBoxOfficeList.map((shit) => (
              <Movie
                key={shit.movieCd}
                id={shit.movieCd}
                rank={shit.rank}
                movieNm={shit.movieNm}
                openDt={shit.openDt}
                audiCnt={((shit.audiCnt / totalAudi) * 100).toFixed(1)}
                audiAcc={shit.audiAcc}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Rank;
