<template>
  <div id="details" class="">
    <div class="">
      <img :src="urlImg2 + mybj.poster_path" alt="" />
    </div>
    <div>
      <ul class="">
        <li>
          <span>Title : </span>{{ mybj.original_title || mybj.original_name }}
        </li>
        <li><span>Language : </span>{{ mybj.original_language }}</li>
        <li><span>Popularity : </span>{{ mybj.popularity }}</li>
        <li><span>Release date :</span> {{ mybj.release_date }}</li>
        <li><span>Vote Average : </span>{{ mybj.vote_average }}</li>
        <li>
          <p><span>Overview : </span>{{ mybj.overview }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "details",
  data() {
    return {
      id: null,
      mybj: {},
      urlImg2: "https://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    ...mapState({
      moviesL: (state) => state.movieList,
      tvshowsList: (state) => state.tvshowsList,
    }),
  },
  methods: {
    fdd() {
      window.alert(this.mybj.id);
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.moviesL.forEach((element) => {
      if (element.id == this.id) this.mybj = { ...element };
    });
    this.tvshowsList.forEach((el) => {
      if (el.id == this.id) this.mybj = { ...el };
    });
  },
};
</script>

<style lang="scss">
#details {
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: #1b1d20;
  width: 78%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 4rem;
  margin-left: 6rem;
  color: white;
  div {
    img {
      max-width: 100%;
    }
    margin-bottom: 1.5rem;
  }
  div {
    ul {
      list-style-type: square;
      li {
        color: rgb(141, 138, 138);

        span {
          color: white;
          padding-right: 1rem;
        }
        font-size: 25px;
        margin: 1.5rem;
        p {
          width: 400px;
        }
      }
    }
  }
}
@media only screen and (max-width: 776px) {
  #details {
    margin-left: 1rem;
    div {
      ul {
        padding-left: .1rem;
        li {
          font-size: 12px;
          margin: 0.5rem 0;
          list-style-type: none;
          padding-left: 0;
          p {
            width: 60vw;
          }
        }
      }
    }
  }
}
</style>