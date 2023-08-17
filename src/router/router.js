import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: () =>
      import(
        /* webpackChunkName:"Pokemon Layout" */ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName:"ListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName:"AboutPage" */ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemon/:id",
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
    ],
  },
  {
    path: "/dbz",
    name: "dbz",
    component: () =>
      import(
        /* webpackChunkName:"DBZ Layout" */ "@/modules/dragon-ball-z/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName:"Characters" */ "@/modules/dragon-ball-z/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /* webpackChunkName:"AboutPage" */ "@/modules/dragon-ball-z/pages/About"
          ),
      },
      {
        path: "/",
        redirect: { name: "dbz-characters" },
      },
    ],
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

// Global Guard - Síncrono
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;

//   if (random > 50) {
//     console.log("Autenticado");
//     next();
//   } else {
//     console.log("Bloqueado por el BeforeEach Guard");
//     next({ name: "pokemon-home" });
//   }
// });

const canAccess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("Autenticado - canAccess");
      resolve(true);
    } else {
      console.log("Bloqueado por el BeforeEach Guard - canAccess");
      resolve(false);
    }
  });
};

router.beforeEach(async (to, from, next) => {
  const authorize = await canAccess();

  authorize ? next() : next({ name: "pokemon-home" });
});

export default router;
