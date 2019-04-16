import * as Utils from './utils';
import {
    expect
} from "chai";
import {
    describe,
    it
} from "mocha";

describe("Rust Wasm Interface", () => {
    before(async function () {
        this.Rust = await import('../pkg/ilovewasm');
    });

    describe("a plus b", () => {
        it('2 + 2 = 4', function () {
          expect(this.Rust.a_plus_b(2, 2)).to.equal(4);
        });

        it('1 + 2 = 3', function () {
          expect(this.Rust.a_plus_b(1, 2)).to.equal(3);
        });
    });
});
