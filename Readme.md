# Smart Panda 🐼

Smart panda is a simple tetris engine intended (but not limited) to be used as a
dev environment for Artificial Intelligences. For more information (and a live demo)
checkout [my personal page](http://h3nnn4n.me/post/smart-panda/).

Please note that this is my first attempt at doing anything serious with rust and wasm.
Also I never used webpack before. So expect some nasty things in this repo. Things
are all over the place. Rust code, javascript files, html and even the output
of webpack.
If you are learning (just like I am), this repository may have some bad practices, so beware.
As I learn more I should make things more tidy around here.

## Features

1. A cool (or silly) name
2. Implemented in rust 🦀
3. Compiles to [WASM](https://webassembly.org/)
4. Has a JavaScript interface
5. Runs in the browser
6. ???
7. Live demo?

## How to use

1. Clone this repo
2. Have the [rust toolchain](https://www.rust-lang.org/tools/install) installed
3. Have [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed
4. Run `npm install`. If you dont have it, you can get it [here](https://www.npmjs.com/get-npm)
5. Run `wasm-pack build`
6. Run `npm link` inside the `pkg` folder
7. Run `npm link smart-panda` on the project root
8. Run `npm run start`
9. Go to `http://localhost:8080/`

## References

There is not a lot about rust and wasm around. So if someone this repository
becomes helpful for someone than I will be happy :D

Checkout [this](https://rustwasm.github.io/book/introduction.html) for a simple (yet complete) tutorial of how to make
a [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using rust/wasm and some
javascript. A more indepth and broad tutorial is available [here](https://rustwasm.github.io/wasm-pack/book/).

Enjoy.

## License

Check the _LICENSE_ file for more information.