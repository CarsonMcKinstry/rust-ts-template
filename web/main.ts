import * as wasm from "@wasm/{{project-name}}";

export const main = async () => {
  console.log("Hello from main");
  wasm.greet("Carson");
};
