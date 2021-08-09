<template>
  <div id="tvshows">
    <ul>
      <h4 style="color: rgb(141, 138, 138)">Most Popular Tv Shows 2021 :</h4>

      <router-link to="'/details/'+el.">
        <li v-for="(el, index) in data" :key="index">
          <router-link :to="'details/' + el.id">
            <tvshow
              :res="el"
              :title="el.original_name"
              :poster="urlImg + el.poster_path"
              :vote="el.vote_average"
            />
          </router-link>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import tvshow from "../components/tvshow.vue";
export default {
  components: { tvshow },
  data() {
    return {
      data: [],
      urlImg: "https://www.themoviedb.org/t/p/w220_and_h330_face",
    };
  },
  created() {
    try {
      var key = "ed645b563b4ed1422cca9c06f85b0e40";
      var url = "https://api.themoviedb.org/3/";
      var popularM = url + "discover/tv?sort_by=popularity.desc&api_key=" + key;
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ed645b563b4ed1422cca9c06f85b0e40&language=en-US&page=1").then((res) => {
        this.data = res.data.results;
        this.$store.commit("filltvs", this.data);
      });
    } catch (msg) {}
  },
};
</script>

<style lang="scss" scoped>
#tvshows{
  ul{
    li{
      list-style-type: none;
      display: inline-block;
      margin: 1rem !important;
    }
  }
}
@media only screen and (max-width:776px) {
  #tvshows{
        margin-left: 0rem;
     ul{
      padding: 0 !important;
        margin: 0 !important;
      li{
        padding: 0 !important;
        margin: 0 !important;
      }
    }
  }
}
</style>