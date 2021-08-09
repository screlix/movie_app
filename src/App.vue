<template>
  <div id="app" class="">
    <headrr />
    <div id="dbl">
      <div>
        <asidee />
        </div>
      <router-view default="{name:'movies'}"></router-view>
    </div>
    <footerr />
  </div>
</template>
<script>
import header from "./components/header.vue";
import aside from "./components/aside.vue";
import footer from "./components/footer.vue";
import eventBus from "./main";
export default {
  components: {
    headrr: header,
    asidee: aside,
    footerr: footer,
  },
  computed: {},
  created() {},
};
</script>
<style lang="scss">
$backClr: #fff;
#app {
  #dbl {
    display: flex;
    justify-content: center;
    justify-content: space-around;
  }
}
body {
  margin: 0px;
  font-family: Poppins;
  background-color: rgb(15, 17, 21);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#movie,
#tvshow {
  cursor: pointer;
  max-width: 220px;
  h5 {
    padding: 1rem 0;
    font-size: 17px;
    color: white;
  }
  p {
    color: rgb(150, 150, 150);
  }
  img {
    min-width: 210px !important;
    border-radius: 0.3rem 0.3rem 0rem 0 rem;
    /*width: 200px;*/
    &:hover {
      opacity: 0.5;
    }
  }
  .content_img:hover div {
    width: 150px;
    padding: 8px 15px;
    visibility: visible;
    opacity: 0.7;
  }
  .content_img {
    position: relative;
    margin-right: 10px;
  }
  .content_img div {
    position: absolute;
    bottom: 0;
    right: 0;
    background: black;
    color: white;
    margin-bottom: 5px;
    font-family: sans-serif;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: visibility 0s, opacity 0.5s linear;
    transition: visibility 0s, opacity 0.5s linear;
    a {
      color: white;
      text-decoration: none;
      /*background: black;
      padding: 0.3rem;
      border: rgb(75, 47, 47) 1px solid;
       */
    }
  }
}
.card {
  border-radius: 1rem;
  background-color: transparent;
  height: 450px !important;
  .card-body {
    background-color: rgb(49, 49, 83);
    min-width: 210px !important;
  }
}
#movies,
#tvshows {
  border-radius: 1rem 1rem 0 0;
  background-color: #1b1d20;
  width: 80%;
  color: white;
  /*display: flex;
  flex-wrap: wrap;
  justify-content: space-between;*/
  /*padding-right: 4rem;
  margin-left: 6rem;*/
  margin-bottom: 2rem;
  padding: 1rem;

  /* button.slick-next:before {
   content: '>';
  }
  button.slick-prev:before{
   content: '⏪'
  } */
  /* button.slick-prev:before,
  button.slick-next:before {
    background-color: rgba(255, 255, 255, 0.4) !important;
    color: rgb(0, 0, 0);
    padding: 2rem 0.7rem;
  } */
  #divFro {
    margin:0 1rem;
    padding: 0 !important;
    width: 210px !important;
    list-style-type: none;
    display: inline-block;
  }
}
#ftr {
  position: absolute;
  bottom: 0;
}
@media only screen and (max-width: 776px) {
  #app {
    #dbl {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
    #movies, #tvshows{
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
}
</style>