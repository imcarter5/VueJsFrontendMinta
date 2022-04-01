import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import OpenPageComponent from "./components/OpenPage.vue";
import IngatlanKinalatComponent from "./components/IngatlanKinalat.vue";

import "bootstrap/dist/css/bootstrap.css";

import VueGoodTablePlugin from "vue-good-table-next";

// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: OpenPageComponent },
    { path: "/offers", component: IngatlanKinalatComponent },
  ],
});

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(router);
import "bootstrap/dist/js/bootstrap";

app.mount("#app");
