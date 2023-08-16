import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from "@/modules/pokemon/pages/AboutPage";
import ListPage from "@/modules/pokemon/pages/ListPage";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage";
import PageNoFound from "@/modules/shared/pages/PageNoFound";

const routes = [
  {
    path: "/",
    component: ListPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/id",
    component: PokemonPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNoFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
