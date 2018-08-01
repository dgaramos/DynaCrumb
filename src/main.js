// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Inicial from "./components/Inicial";
import Meio from "./components/Meio";
import Fim from "./components/Fim";

Vue.use(VueRouter);

require("../node_modules/bootstrap/scss/bootstrap.scss");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicial,
      meta: { group: "", breadcrumb: "Inicial" }
    },
    {
      path: "/meio",
      component: Meio,
      meta: { group: "", breadcrumb: "Meio" }
    },
    {
      path: "/fim",
      component: Fim,
      meta: { group: "", breadcrumb: "Fim" }
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>"
});
