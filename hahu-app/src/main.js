import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import OpenPageComponent from "./components/OpenPage.vue";
import IngatlanKinalatComponent from "./components/IngatlanKinalat.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const router = createRouter({
  history: createWebHistory,
  routes: [
    { path: "/", component: OpenPageComponent },
    { path: "/offers", IngatlanKinalatComponent },
  ],
});

const app = createApp(App);
app.use(router);

app.mount("#app");
