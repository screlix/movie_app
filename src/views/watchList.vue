<template>
  <div id="watchlist">
    <div v-if="watchList.length == 0" style="padding:1rem;text-align:center;">
      <i class="fas fa-info-circle"></i> Your watch list is empty ツ
    </div>
    <ul>
      <li v-for="(el, index) in watchList" :key="index">
        <router-link :to="'details/' + el.id">
          <movie
            :title="el.original_title || el.original_name"
            :poster="urlImg + el.poster_path"
            :vote="el.vote_average"
            :res="el"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import movie from "../components/movie.vue";
export default {
  components: { movie },
  data() {
    return {
      urlImg: "https://www.themoviedb.org/t/p/w220_and_h330_face",
    };
  },
  computed: {
    ...mapState({
      watchList: (state) => state.watchlist,
    }),
  },
  mounted() {
    window.alert(this.watchList.length());
  },
};
</script>

<style lang="scss">
#watchlist {
  margin-bottom: 2rem;
  min-height: 100vh;
  border-radius: 1rem;
  background-color: #1b1d20;
  align-items: center;
  justify-content: center;
  width: 78%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding-right: 4rem;
  margin-left: 6rem;
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      margin: 0 1rem !important;
    }
  }
}
@media only screen and (max-width: 776px) {
  #watchlist{
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