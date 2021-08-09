<template>
  <div id="aside">
    <div>
      <ul id="genre">
        <span>Genre :</span>
        <li v-for="(el, index) in data" :key="index">
          <a href="#" :id="el.id" @click="emiGenre($event)">{{ el.name }}</a>
        </li>
      </ul>
    </div>
    <!--  <div id="language">
      <ul>
        <li><span>Language</span></li>
        <a href="#"><li>English</li></a>
        <a href="#"><li>Hindi</li></a>
        <a href="#"><li>French</li></a>
        <a href="#"><li>Spanish</li></a>
      </ul>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import bus from "../main";
export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
    var key = "ed645b563b4ed1422cca9c06f85b0e40";
    axios.get(url + key).then((res) => {
      console.log(res);
      this.data = res.data.genres;
    });
  },
  methods: {
    emiGenre(e) {
      var elId = e.target.id;
      bus.$emit("genreEv", elId);
    },
  },
};
</script>

<style lang="scss" scoped>
#aside {
  margin-right: 4rem !important;
  /*background-color: rgb(15, 17, 21);*/
  padding-top: 4rem;
  position: absolute;
  left: 0%;
  span {
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 1rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    li {
      list-style-type: none;
      margin: 0.3rem 0rem;

      a {
        background-color: rgb(156, 154, 154);
        border-radius: 3rem;
        padding: 0.2rem 0.5rem;
        font-size: 15px;

        color: rgb(233, 231, 231);
        text-decoration: none;
        &:focus {
          background-color: rgb(255, 255, 255);
          color: black;
          border: 1px white solid;
        }
        &:hover {
          background-color: rgb(0, 0, 0);
          color: white;
          border: 1px white solid;
        }
      }
    }
  }
}
@media only screen and (max-width: 776px) {
  #aside {
    display: none;
    ul {
          flex-direction: row;
      li {
        display: inline;
        margin: 0 0.5rem;
      }
    }
  }
}
</style>