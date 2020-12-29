import * as wasm from "rust-ts-template";

export const main = async () => {
  console.log("Hello from main");
  wasm.greet("Carson");
};
