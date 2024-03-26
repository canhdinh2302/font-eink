const chokidar = require("chokidar");
const { exec } = require("child_process");

const watcher = chokidar.watch("src", { ignored: /^\./, persistent: true });

let timer;

watcher.on("change", function () {
  console.log(`[File changed]: ${new Date().toISOString()}`);
  clearTimeout(timer);
  timer = setTimeout(() => {
    exec("yarn build")
      .on("exit", () => console.log(`[Build successfully]: ${new Date().toISOString()}`))
      .on("error", () => console.log(`[Build failed]: ${new Date().toISOString()}`));
  }, 12000);
});

console.log("Started dev mode!");
