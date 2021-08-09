<template>
  <div id="banner" :style="{ background: `linear-gradient(120deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 70%), url(${imgg})`}">
    <div id="content">
      <h3>Enjoy Latest Movies and Tv Series</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum
        odio, placeat delectus magnam, maxime dignissimos expedita nulla.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props:['imgg']
  ,
  data(){
      return{

      }
  }
};
</script>

<style lang="scss">
#banner{
    width: 100% !important;
    height: 400px;
    margin-bottom: 2rem;
    background-color: black;
    background-repeat: no-repeat !important;
    background-position: right !important;
    background-size: contain !important;
    #content{
        padding: 2rem;
        p{
            width: 400px;
        }
    }
}
@media only screen and (max-width:776px){
  #banner{
        height: 200px;
    #content{
      text-align: center;
      h3{
        font-size: 13px;
      }
      p{
        display: none;
      }
    }
  }
}
</style>