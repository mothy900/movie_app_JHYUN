import React from "react";
import Axios from "axios";
import SearchMovie from "./SearchMovie";

class Search extends React.Component {
  state = {
    isLoading: true,
    movieList: [],
    movieNm: "",
    directors: [],
    companys: [],
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
    const {
      data: {
        movieListResult: { movieList: directors, companys },
      },
    } = await Axios.get(finalURL);

    console.log("finalURL : " + finalURL);
    console.log(movieList[0].movieCd);
    console.log(movieList[0].movieNm);
    console.log(movieList[0].openDt);
    console.log(movieList[0].prdtYear);
    console.log(movieList[0].nationAlt);
    console.log(movieList[0].genreAlt);
    console.log(movieList[0].directors[0].peopleNm);
    console.log(movieList[0].companys[0].companyNm);
    this.setState({ movieList, isLoading: false, directors, companys });
    console.log("directors : " + directors);
    console.log("companys : " + companys);
  };

  handleChange = (e) => {
    //input text창에 데이터를 입력 받도
    this.setState({
      movieNm: e.target.value,
    });
  };

  handleKeyPress = (event) => {
    //if (this.state.movieNm) {
    if (event.key === "Enter") {
      this.getmovie();
    }
    //}
  };

  render() {
    const { isLoading, movieList } = this.state;
    console.log("movie List" + this.state.movieList);

    return (
      <section className="container">
        {isLoading ? (
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
          </div>
        ) : (
          <div className="search">
            <div className="search__title">Search Result</div>
            {movieList.map((searchMovie) => (
              <SearchMovie
                key={searchMovie.movieCd}
                id={searchMovie.movieCd}
                movieNm={searchMovie.movieNm}
                openDt={searchMovie.openDt}
                prdtYear={searchMovie.prdtYear}
                nationAlt={searchMovie.nationAlt}
                genreAlt={searchMovie.genreAlt}
                directors={searchMovie.peopleNm}
                company={searchMovie.companyNm}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Search;

//	http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b
