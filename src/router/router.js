import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName:"ListPage" */ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName:"AboutPage" */ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/pokemon/:id",
    name: "pokemon-id",
    component: () =>
      import(
        /* webpackChunkName:"PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      const id = Number(route.params.id);

      return isNaN(id) ? { id: 1 } : { id };
    },
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
