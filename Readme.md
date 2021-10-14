# Rust Wasm Template

When I started messing arround with Rust and webassembly I found the good Rust documentation, however it did not cover
everything that I needed. In particular I had a really bad time getting wasm to run inside a test environment.
After many hours of relentless and merciless battle I managed to get it to work. This is a template
repository with the basic boiler-plate.

There is pretty much nothing about unit testing hybrid js/wasm code in the internet (at least that I could find).
So I hope this can be helpful to somebody ;)

Any questions/suggestions feel free to open an issue/pull request.

## How to use

1. Clone this repo
2. Have the [rust toolchain](https://www.rust-lang.org/tools/install) installed
3. Have [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed
4. Run `yarn install`. If you dont have it, you can get it [here](https://yarnpkg.com/lang/en/docs/install/)
5. Run `wasm-pack build`
6. Run `yarn link` inside the `pkg` folder
7. Run `yarn link ilovewasm` on the project root (this is the project name on the _config.toml_ file)
8. Run `yarn run dev-server`
9. Go to `http://localhost:8080/`

## About Rust -> Wasm

Checkout [this](https://rustwasm.github.io/book/introduction.html) for a simple (yet complete) tutorial of how to make
a [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using rust/wasm and some
javascript. A more indepth and broad tutorial is available [here](https://rustwasm.github.io/wasm-pack/book/).

## License

This is available under the MIT-0 license. See [LICENSE](LICENSE) for more information.

TLDR: Use it for whatever you wan't, don't bother with attribution.
