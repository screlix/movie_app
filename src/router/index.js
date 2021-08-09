import Vue from "vue";
import VueRouter from "vue-router";
import movies from "../views/movies.vue";
import tvshows from "../views/tvshows.vue";
import watchList from "../views/watchList";
import details from '../views/details.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: movies,
    name: "movies",
  },
  {
    path: "/tvshows",
    component: tvshows,
    name: "tvshows",
  },
  {
    path: "/watchlist",
    component: watchList,
    name: "watchList",
  },
  {
    path: "/details/:id",
    component:details, 
    name:"details"
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
