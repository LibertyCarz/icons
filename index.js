// const pipeline = require("icomoon-cli");
const pipeline = require("./main");

pipeline({
  // icons: ["SVG"],
  // icons: ["SVG/account.svg", "SVG/add.svg"],
  svgDir: "../app/SVG",
  // names: ["account", "add"],
  selectionPath: "selection.json",
  outputDir: "output",
  forceOverride: true,
  visible: false,
  whenFinished(result) {
    // you can get the absolute path of output directory via result.outputDir
  },
});
