<template>
  <div id="headr" class="row">
    <div class="col-sm">
      <router-link to="/">
        <span class="col-sm" href="/"
          ><img src="../assets/moviee.svg" alt="logo"
        /></span>
      </router-link>
    </div>
    <div class="col-sm input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Search Movie or Tv show"
        @input="seard"
        ref="input"
      />
      <button
        type="button"
        @click="clearI"
        style="
          margin-left: -40px;
          z-index: 100;
          outline: none !important;
          appearance: none;
          border: none;
          background: none;
        "
      >
        <i class="fa fa-times"></i>
      </button>
    </div>
    <span class="col-sm">
      <ul>
        <li><router-link to="/" id="movie1">Movies</router-link></li>
        <li><router-link to="/tvshows">Tv Shows</router-link></li>
        <li><router-link to="/watchlist">WatchList</router-link></li>
      </ul>
    </span>
  </div>
</template>
<script>
import bus from "../main";
export default {
  name: "header",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    seard() {
      bus.$emit("searchEv", this.$refs.input.value);
    },
    clearI() {
      this.$refs.input.value = "";
    },
  },
};
</script>
<style lang="scss" scoped>
#headr {
  background-color: rgb(15, 17, 21);
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0.7rem 0rem;

  span {
    img {
      width: 80px;
    }
  }

  div {
    input {
      /*background-color: rgb(52, 52, 56);*/
      border: black;
      width: 400px;
      /* color: rgb(189, 188, 188);*/
      padding: 0.6rem 1rem;
    }
    ::-webkit-input-placeholder {
      color: rgb(141, 138, 138);
    }
  }
  span:last-child {
    text-align: center;
  }
  ul {
    padding: 0px;
    margin: 0px;
    li {
      list-style-type: none;
      display: inline;
      margin: 0rem 0.7rem;
      a {
        color: rgb(141, 138, 138);
        text-decoration: none;
        &:focus {
          color: white;
        }
      }
    }
  }
}
</style>