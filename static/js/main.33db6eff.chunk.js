(this.webpackJsonpmovie_app_jh_ranking=this.webpackJsonpmovie_app_jh_ranking||[]).push([[0],{21:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){e.exports=t(64)},39:function(e,a,t){},58:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(32),r=t.n(o),i=t(11),l=t(1),m=t(7),s=t(8),v=t(10),u=t(9),_=(t(39),t(21),function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"login__container"},c.a.createElement("div",{className:"login"},c.a.createElement("input",{type:"email",className:"login__id",placeholder:"Input your ID mail"}),c.a.createElement("input",{className:"login__password",placeholder:"Input your Password",type:"password"}),c.a.createElement("input",{type:"submit",value:"Log in"})))}}]),t}(c.a.Component)),p=function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"Join_container"},c.a.createElement("div",null,c.a.createElement("span",null,"Join us")))}}]),t}(c.a.Component),d=t(13),h=t.n(d),f=t(16),E=t(15),N=t.n(E);var g=function(e){var a=e.peopleNm;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"search__movie__factor search__movie__peopleNm"},c.a.createElement("span",null,a))))};var b=function(e){var a=e.companyNm;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"search__movie__factor search__movie__companyNm"},c.a.createElement("span",null,a))))};var y=function(e){var a=e.movieCd,t=e.movieNm,n=e.openDt,o=e.prdtYear,r=e.nationAlt,i=e.genreAlt,l=e.directors,m=e.companys;return c.a.createElement("div",{className:"search__movie"},c.a.createElement("div",{className:"search__movie__data"},c.a.createElement("div",{className:"search__movie__factor search__movie__movieNm"},c.a.createElement("span",null,t)),c.a.createElement("div",{className:"search__movie__factor search__movie__openDt"},c.a.createElement("span",null,n)),c.a.createElement("div",{className:"search__movie__factor search__movie__year"},c.a.createElement("span",null,o)),c.a.createElement("div",{className:"search__movie__factor search__movie__nation"},c.a.createElement("span",null,r)),c.a.createElement("div",{className:"search__movie__factor search__movie__genre"},c.a.createElement("span",null,i)),l.map((function(e){return c.a.createElement(g,{key:a,id:a,peopleNm:e.peopleNm})})),m.map((function(e){return c.a.createElement(b,{key:a,id:a,companyNm:e.companyNm})}))))},k=(t(30),function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={isLoading:!0,movieList:[],movieNm:"",directors:[],companys:[]},e.getmovie=Object(f.a)(h.a.mark((function a(){var t,n,c,o,r,i,l;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=587d2f6f9c5a21626ec444fb6bd09237&movieNm=",t="http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=587d2f6f9c5a21626ec444fb6bd09237&movieNm="+e.state.movieNm,a.next=4,N.a.get(t);case 4:return n=a.sent,c=n.data.movieListResult.movieList,a.next=8,N.a.get(t);case 8:o=a.sent,r=o.data.movieListResult.movieList,i=r.directors,l=r.companys,console.log("finalURL : "+t),console.log(c[0].movieCd),console.log(c[0].movieNm),console.log(c[0].openDt),console.log(c[0].prdtYear),console.log(c[0].nationAlt),console.log(c[0].genreAlt);try{console.log(c[0].directors[0].peopleNm)}catch(m){console.log(m)}try{console.log(c[0].companys[0].companyNm)}catch(m){console.log(m)}e.setState({movieList:c,isLoading:!1,directors:i,companys:l});case 22:case"end":return a.stop()}}),a)}))),e.handleChange=function(a){e.setState({movieNm:a.target.value})},e.handleKeyPress=function(a){"Enter"===a.key&&e.getmovie()},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movieList;return c.a.createElement("section",{className:"container"},a?c.a.createElement("div",{className:"homepage"},c.a.createElement("div",{className:"homepage__title"},c.a.createElement("span",null,"Movie Search Page")),c.a.createElement("div",{className:"homepage__loader"},c.a.createElement("h3",null,"Input Movie Title "),c.a.createElement("input",{type:"text",id:"movieNm",value:this.state.movieNm,className:"loader__serchbar",placeholder:"Input here Movie Title",onChange:this.handleChange,onKeyPress:this.handleKeyPress}))):c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search__title"},"Search Result"),t.map((function(e){return c.a.createElement(y,{key:e.movieCd,id:e.movieCd,movieCd:e.movieCd,movieNm:e.movieNm,openDt:e.openDt,prdtYear:e.prdtYear,nationAlt:e.nationAlt,genreAlt:e.genreAlt,directors:e.directors,companys:e.companys})}))))}}]),t}(c.a.Component));t(58);var w=function(e){var a=e.movieNm,t=e.rank,n=e.openDt,o=e.audiAcc,r=e.audiCnt;return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"movie__data"},c.a.createElement("div",{className:"movie__eachInfo movie__rank"},t),c.a.createElement("div",{className:"movie__eachInfo movie__name"},a),c.a.createElement("div",{className:"movie__eachInfo movie__date"},n),c.a.createElement("div",{className:"movie__eachInfo movie__rate"},r),c.a.createElement("div",{className:"movie__eachInfo movie__cnt"},o)))},j=function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={isLoading:!0,weeklyBoxOfficeList:[],date:"",totalAudi:""},e.handleChange=function(a){e.setState({date:a.target.value})},e.handleKeyPress=function(a){e.state.date.slice(0,7),8===e.state.date.length&&(e.inputSearchDate(),e.state.date&&e.getmovie())},e.inputSearchDate=function(a){e.state.date.slice(0,7),e.state.date&&e.getmovie()},e.getmovie=Object(f.a)(h.a.mark((function a(){var t,n,c,o,r;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&targetDt=",t="https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=26f8c1b0fd8afe36ceb0eff48b468b5b&targetDt="+e.state.date,a.next=4,N.a.get(t);case 4:for(n=a.sent,c=n.data.boxOfficeResult.weeklyBoxOfficeList,o=0,r=0;r<c.length;r++)o+=parseInt(c[r].audiCnt);e.setState({weeklyBoxOfficeList:c,isLoading:!1,totalAudi:o});case 9:case"end":return a.stop()}}),a)}))),e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.weeklyBoxOfficeList,n=e.totalAudi;return c.a.createElement("section",{className:"container"},a?c.a.createElement("div",{className:"homepage"},c.a.createElement("div",{className:"homepage__title"},c.a.createElement("span",null,"Display Weekly Boxoffice Ranking")),c.a.createElement("div",{className:"homepage__loader"},c.a.createElement("h3",null,"Input SearchDate "),c.a.createElement("input",{className:"loader__serchbar",placeholder:"Serch Date YYYYMMDD",value:this.state.date,onChange:this.handleChange,onKeyPress:this.handleKeyPress}))):c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"movie__title"},c.a.createElement("div",{className:"movie__title_font movie__rank"},"Rnaking"),c.a.createElement("div",{className:"movie__title_font movie__name"},"\uc601\ud654 \uc81c\ubaa9"),c.a.createElement("div",{className:"movie__title_font movie__date"},"\uac1c\ubd09 \ub0a0\uc9dc"),c.a.createElement("div",{className:"movie__title_font movie__rate"},"\uc608\ub9e4\uc728"),c.a.createElement("div",{className:"movie__title_font movie__cnt"},"\ub204\uc801 \uad00\uac1d \uc218")),t.map((function(e){return c.a.createElement(w,{key:e.movieCd,id:e.movieCd,rank:e.rank,movieNm:e.movieNm,openDt:e.openDt,audiCnt:(e.audiCnt/n*100).toFixed(1),audiAcc:e.audiAcc})}))))}}]),t}(c.a.Component),O=function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"Menu-wrapper"},c.a.createElement("ul",null,c.a.createElement(i.c,{to:"/movie_app_kofic/menu/rank"},c.a.createElement("li",null,"Rank")),c.a.createElement(i.c,{to:"/movie_app_kofic/menu/search"},c.a.createElement("li",null,"Search")))),c.a.createElement("div",{className:"Contents-wrapper"},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/movie_app_kofic/menu/rank",exact:!0,component:j}),c.a.createElement(l.a,{path:"/movie_app_kofic/menu/search",exact:!0,component:k}))))}}]),t}(c.a.Component);var C=function(){return c.a.createElement("div",null,c.a.createElement(i.c,{to:"/home"},"Home"),c.a.createElement(i.c,{to:"/menu"},"Menu"),c.a.createElement(i.c,{to:"/join"},"Join"))};var x=function(){return c.a.createElement(i.b,null,c.a.createElement(C,null),c.a.createElement(l.a,{path:"/home",exact:!0,component:_}),c.a.createElement(l.a,{path:"/join",exact:!0,component:p}),c.a.createElement(l.a,{path:"/menu",exact:!0,component:O}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.33db6eff.chunk.js.map