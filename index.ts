import 'bootstrap';
import * as $ from "jquery";

var Rust: any;

const init = () => {
  let result = Rust.a_plus_b(2, 2);
  let text = `In Rust 2 + 2 = ${result}`;
  let test_works = "<div>If you see this, the wasm chunk was loaded and is working</div>";

  $('#test').text(text);
  $('#test').after(test_works);
}

export const load = () => {
  (() => import( /* webpackChunkName: "ilovewasm" */ './pkg/ilovewasm.js').then(module => {
    Rust = module;
    init();
  }))();
}
