import( /* webpackChunkName: "index" */ "./index")
  .then(module => {
    module.load();
  })
  .catch(e => console.error("Error importing `index`:", e));