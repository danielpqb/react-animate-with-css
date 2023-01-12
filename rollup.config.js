import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
      strict: false,
    },
    plugins: [resolve(), commonjs(), typescript()],
    external: ["react", "animate.css"],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
      strict: false,
    },
    plugins: [resolve(), commonjs(), typescript()],
    external: ["react", "animate.css"],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{
      file: "dist/index.d.ts",
      format: "esm",
      sourcemap: true,
      strict: false,
    }],
    plugins: [dts()],
    external: ["react", "animate.css"],
  }
];
