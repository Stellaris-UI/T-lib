// Read:
// Why code splitting components? On
// https://github.com/Stellaris-UI/t-lib/blob/master/README.md

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default {
  input: [
    "src/index.ts",
    "src/container-test/container-testComponent.tsx",
    "src/re-test/re-testComponent.tsx"
  ],
  // Also de input is way diferent when using code splitting
  // we use the direct component to bundle per component
  // input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    //This is in case we don't need code splitting between components
    // {
    //   file: packageJson.module,
    //   format: "esm",
    //   sourcemap: true
    // }
  ],
  //Added preserveModules for code splitting
  preserveModules:true,
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss()
  ]
};