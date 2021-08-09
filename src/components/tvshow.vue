<template>
  <dir id="tvshow" class="card">
    <div class="content_img">
      <img v-bind:src="poster" alt="" class="card-img-top" />
      <div>
        <a href="#" @click="addtowatch($event)">Add to watchList</a>
        <!-- <a href="#" @click="addtowatch">Learn More</a> -->
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">⭐ {{ vote }}</p>
    </div>
  </dir>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name:'tvshow',
  props:{
    poster:{
      type:String
    }, 
    title:{
      type:String
    }, 
    vote:{
      type:String
    },
    res:{}
  },
  data() {
    return {
      
    }
  },
  computed:{
   
  },
  methods:{
    addtowatch(e){
      e.preventDefault();
      this.$store.commit('addwatchL', this.res)
    }
  }
};
</script>
<style></style>
