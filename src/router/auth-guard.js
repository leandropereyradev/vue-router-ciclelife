const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("Está autenticado");
      next();
    } else {
      console.log("No está autenticado");
      next({ name: "pokemon-home" });
    }
  });
};

export default isAuthenticatedGuard;
