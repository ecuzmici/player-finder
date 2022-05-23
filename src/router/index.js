import { createRouter, createWebHistory } from "vue-router";
import PlayerSearchView from "../views/PlayerSearchView.vue";
import PositionSearchView from "../views/PositionSearchView.vue";
import ResultsView from "../views/ResultsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PlayerSearchView,
  },
  {
    path: "/positions",
    name: "positions",
    component: PositionSearchView
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
