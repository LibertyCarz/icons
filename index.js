const pipeline = require("icomoon-cli");

pipeline({
  // icons: ["SVG"],
  icons: ["SVG/account.svg", "SVG/add.svg"],
  names: ["account", "add"],
  selectionPath: "selection.json",
  outputDir: "output",
  forceOverride: true,
  visible: false,
  whenFinished(result) {
    // you can get the absolute path of output directory via result.outputDir
  },
});
