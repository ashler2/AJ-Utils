const { exec } = require("child_process");

const install = com =>
  new Promise((res, rej) => {
    exec(com, (err, stdout, stderr) => {
      return err ? rej(err) : res();
    });
  });

module.exports = install;
