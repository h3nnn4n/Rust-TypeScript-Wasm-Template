var Rust;

const init = () => {
  let a = Rust.a_plus_b(2, 2);

  $('#test').text(a);
}

(() => import( /* webpackChunkName: "ilovewasm" */ './pkg/ilovewasm').then(module => {
  Rust = module;
  init();
}))();
