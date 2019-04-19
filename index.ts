var Rust: any;

const init = () => {
  let a = Rust.a_plus_b(2, 2);

  $('#test').text(a);
}

export const load = () => {
  (() => import( /* webpackChunkName: "ilovewasm" */ './pkg/ilovewasm.js').then(module => {
    Rust = module;
    init();
  }))();
}