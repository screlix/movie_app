<template>
  <div id="movies" class="">
    <ul id="forSearchGenre" v-if="datax.length > 0">
      <li v-for="(el, index) in datax" :key="index" id="divFro">
        <router-link :to="'details/' + el.id">
          <movie
            :res="el"
            :title="el.original_title"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
          />
        </router-link>
      </li>
    </ul>
    <!-- banner -->
    <VueSlickCarousel
      :arrows="false"
      :infinite="true"
      :autoplay="true"
      :dots="false"
      :slidesToShow="1"
      :slidesToScroll="1"
      :autoplayspeed="2000"
      :scroll="false"
      :draggable="false"
      v-if="data.length > 0"
      style="cursor: pointer"
    >
      <div v-for="(el, index) in loopingS" :key="index">
        <banner :imgg="urlImg2 + el.backdrop_path" />
      </div>
    </VueSlickCarousel>
    <!-- ***************** -->
    <h5 class="h5color">most popular movies 2021 :</h5>
    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      :slidesToShow="4"
      :slidesToScroll="3"
      v-if="data.length > 0"
      :responsive="respon"
    >
      <div v-for="(el, index) in data" :key="index" id="divFro">
        <router-link :to="'details/' + el.id">
          <movie
            :res="el"
            :title="el.original_title"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
          />
        </router-link>
      </div>
    </VueSlickCarousel>
    <!-- ***************** -->
    <h5 class="h5color">movies in theatres :</h5>
    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      :slidesToShow="4"
      :slidesToScroll="3"
      v-if="data1.length > 0"
      :responsive="respon"
    >
      <div v-for="(el, index) in data1" :key="index" id="divFro">
        <router-link :to="'details/' + el.id">
          <movie
            :res="el"
            :title="el.original_title"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
          />
        </router-link>
      </div>
    </VueSlickCarousel>
    <!--************************ -->
    <h5 class="h5color">Daily Trending :</h5>
    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      :slidesToShow="4"
      :slidesToScroll="3"
      v-if="data2.length > 0"
      :responsive="respon"
    >
      <div v-for="(el, index) in data2" :key="index" id="divFro">
        <router-link :to="'details/' + el.id">
          <movie
            :res="el"
            :title="el.original_title"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
          />
        </router-link>
      </div>
    </VueSlickCarousel>

    <!--************************ -->
    <h5 class="h5color">highest rated movies :</h5>
    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      :slidesToShow="4"
      :slidesToScroll="3"
      v-if="data3.length > 0"
      :responsive="respon"
      kp
    >
      <div v-for="(el, index) in data3" :key="index" id="divFro">
        <router-link :to="'details/' + el.id">
          <movie
            :res="el"
            :title="el.original_title"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
          />
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import axios from "axios";
import movie from "../components/movie.vue";
import banner from "../components/banner.vue";
import bus from "../main";
import $ from "jquery";
//import 'slick-carousel'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
//*********************
export default {
  components: { movie, banner, VueSlickCarousel },
  name: "movies",
  data() {
    return {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      datax: [],
      urlImg: "https://www.themoviedb.org/t/p/w220_and_h330_face",
      urlImg2: "https://image.tmdb.org/t/p/w500",
      respon: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
  },
  computed: {
    loopingS() {
      return this.data.filter((v, i) => i < 4);
    },
  },
  created() {
    try {
      //this is for search movies
      bus.$on("searchEv", (data) => {
        var input = data.trim().split(" ").join("+");
        var urlSearch =
          "https://api.themoviedb.org/3/search/movie?api_key=ed645b563b4ed1422cca9c06f85b0e40&query=" +
          input;
        axios.get(urlSearch).then((res) => {
          this.datax = res.data.results;
          this.$store.commit("fillMovies", this.datax);
        });
      });
      var key = "ed645b563b4ed1422cca9c06f85b0e40";
      var url = "https://api.themoviedb.org/3/";
      var popularM =
        url + "discover/movie?sort_by=popularity.desc&api_key=" + key;
      var moviesHRated =
        url +
        "discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=" +
        key;
      var moviesInT =
        url +
        "discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=" +
        key;
      var moviesDaTren =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" + key;
      //most popular movies
    /*  axios
        .get(popularM)
        .then((res) => {
          this.data = res.data.results;
          this.$store.commit("fillMovies", this.data);
        })
        .catch((er) => {
          console.log(er);
        });
      //movies in theatres:
      ///discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
      axios.get(moviesInT).then((res) => {
        this.data1 = res.data.results;
        this.$store.commit("fillMovies", this.data1);
      });
      //Daily Trending
      //https://api.themoviedb.org/3/trending/movie/day?api_key=###

      axios.get(moviesDaTren).then((res) => {
        this.data2 = res.data.results;
        this.$store.commit("fillMovies", this.data2);
      });
      //highest rated movies
      ///discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc
      axios.get(moviesHRated).then((res) => {
        this.data3 = res.data.results;
        this.$store.commit("fillMovies", this.data3);
      });

      //movies genre :
      var url2 =
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
        key +
        "&with_genres=";
      bus.$on("genreEv", (elId) => {
        axios.get(url2 + elId).then((res) => {
          this.datax = res.data.results;
          this.$store.commit("fillMovies", this.datax);
        });
      });
      */
 var that = this;
    axios
      .all([
        axios.get(popularM),
        axios.get(moviesInT),
        axios.get(moviesDaTren),
        axios.get(moviesHRated),
      ])
      .then(axios.spread((d, d1, d2, d3) => {
          (that.data = d1.data.results),
            that.$store.commit("fillMovies", this.data),
            (that.data1 = d1.data.results),
            that.$store.commit("fillMovies", this.data1),
            (that.data2 = d2.data.results),
            that.$store.commit("fillMovies", this.data2),
            (that.data3 = d3.data.results),
            that.$store.commit("fillMovies", this.data3);
        })
      );
    } catch (msg) {}
    
   
    //key : ed645b563b4ed1422cca9c06f85b0e40
    //https://api.themoviedb.org/3/movie/76341?api_key=
    //search : https://api.themoviedb.org/3/search/movie?api_key=ed645b563b4ed1422cca9c06f85b0e40&query=a+quiet+place
    //get : https://api.themoviedb.org/3/movie/76341?api_key=ed645b563b4ed1422cca9c06f85b0e40
  },
  updated() {},
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
h5 {
  font-style: italic;
}
.h5color {
  color: #e4980a;
}
</style>