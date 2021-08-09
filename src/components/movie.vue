<template>
  <dir id="movie" class="card">
    <div class="content_img">
      <img v-bind:src="poster" alt="" class="card-img-top" />
      <div>
        <a v-if="$route.name!='watchList'" href="#" @click="addtowatch($event)" style="margin-bottom:.3rem">Add to watchList</a><br>
        <a v-if="$route.name=='watchList'" href="#" @click="removeFromWatch($event)">Delete</a>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">⭐ {{ vote }}</p>
    </div>
  </dir>
</template>

<script>
export default {
  name: "movie",
  props: {
    title: {
      type: String,
    },
    poster: {
      type: String,
    },
    vote: {
      type: String,
    },
    res: [],
  },
  data() {
    return {};
  },
  methods: {
    addtowatch(e) {
      e.preventDefault();
      this.$store.commit("addwatchL", this.res);
    },
    removeFromWatch(e){
      e.preventDefault();
      this.$store.commit("removeFromWa",this.res)
    }
  },
};
</script>

<style lang="scss" scoped>
a{
margin: 10px 0;
}
</style>