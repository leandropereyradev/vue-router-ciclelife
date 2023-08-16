import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName:"ListPage" */ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName:"AboutPage" */ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/id",
    component: () =>
      import(
        /* webpackChunkName:"PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName:"PageNoFound" */ "@/modules/shared/pages/PageNoFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
