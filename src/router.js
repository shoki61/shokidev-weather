import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home"
import Weather from "./components/currentWeather"
import Forecast from "./components/Forecast";
import Error from "./components/Error"


Vue.use(VueRouter);

export const router = new VueRouter({
  routes : [
    {path : "/" , component : Home},
    {path : "/currentWeather",component : Weather},
    {path : "/forecast",component : Forecast},
    {path : "/error",component : Error}
  ]
});
