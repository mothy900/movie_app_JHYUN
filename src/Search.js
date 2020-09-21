import React from "react";
import Axios from "axios";

class Search extends React.Component {
  state = {
    isLoading: true,
    movieList: [],
    movieNm: "",
  };

  getmovie = async () => {
    const movieURL =
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&movieNm=";

    const finalURL = movieURL + this.state.movieNm;
    const {
      data: {
        movieListResult: { movieList },
      },
    } = await Axios.get(finalURL);
    console.log("finalURL : " + finalURL);
    console.log("info : " + movieList);
    this.setState({ movieList, isLoading: false });
  };

  handleChange = (e) => {
    //input text창에 데이터를 입력 받도록
    this.setState({
      movieNm: e.target.value,
    });
  };

  handleKeyPress = (event) => {
    //if (this.state.movieNm) {
    if (event.key === "Enter") {
      console.log("enter");
      this.getmovie();
    }
    //}
  };
  /*componentDidMount() {
    //페이지 로드시 한번 실행
    this.getmovie();
  }*/
  render() {
    return (
      <section className="container">
        {
          <div className="homepage">
            <div className="homepage__title">
              <span>Movie Search Page</span>
            </div>
            <div className="homepage__loader">
              <h3>Input Movie Title </h3>
              <input
                type="text"
                id="movieNm"
                value={this.state.movieNm}
                className="loader__serchbar"
                placeholder="Input here Movie Title"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </div> /* : (
          <div className="movies">
            <span> SearCH! </span>
          </div>
        )*/
        }
      </section>
    );
  }
}
export default Search;

//	http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b
