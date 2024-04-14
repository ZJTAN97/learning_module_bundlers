/**
 * This file demostrates how you can use rollup via their API instead of CLI
 * This build uses watch mode
 */

const rollup = require("rollup");

const options = {
  input: "./src/index.js",
  output: {
    file: "./public/bundle.js",
  },
};

const watcher = rollup.watch(options);

watcher.on("event", (event) => {
  console.log(event.code);
});


// watcher.close();