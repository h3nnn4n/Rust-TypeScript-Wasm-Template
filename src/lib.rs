extern crate cfg_if;
extern crate rand;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn js_alert(name: &str) {
    alert(&format!("{}", name));
}

#[wasm_bindgen]
pub fn a_plus_b(a: i32, b: i32) -> i32 {
    a + b
}

