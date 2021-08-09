import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    watchlist: [],
    movieList: [],
    tvshowsList: [],
  },
  getters: {},
  mutations: {
    addwatchL(state, el) {
      var check=false;
     state.watchlist.forEach(er=>{
       if(er.id==el.id)check=true
     })
     if(!check)
      state.watchlist.push(el);
    },
    removeFromWa(state, el) {
      state.watchlist = state.watchlist.filter(f=>f.id!=el.id);
    },
    fillMovies(state, db) {
      state.movieList= state.movieList.concat(db);
    },
    filltvs(state, db) {
      state.tvshowsList = db;
    },
  },
});
