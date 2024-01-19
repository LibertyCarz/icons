const pipeline = require("icomoon-cli");

pipeline({
  icons: ["SVG"],
  // names: ["new1", "new2"],
  selectionPath: "selection.json",
  outputDir: "output",
  forceOverride: true,
  visible: true,
  whenFinished(result) {
    // you can get the absolute path of output directory via result.outputDir
  },
});
