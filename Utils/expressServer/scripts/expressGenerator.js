const fs = require("fs");
const { promisify } = require("util");
const mkDir = promisify(fs.mkdir);
const mkFile = promisify(fs.writeFile);
const install = require("./install.js");
const addScripts = require("./scripts.js");
const {
  app,
  listen,
  api,
  config,
  gitignore,
  errors
} = require("../example/index");

const expressGen = name => {
  mkDir(`${name}`)
    .then(() => {
      return Promise.all([
        mkDir(`${name}/controllers`),
        mkDir(`${name}/models`),
        mkDir(`${name}/routes`),
        mkDir(`${name}/config`),
        mkFile(`${name}/.gitignore`, gitignore),
        mkFile(`${name}/app.js`, app),
        mkFile(`${name}/listen.js`, listen)
      ]);
    })
    .then(() => {
      return Promise.all([
        mkFile(`${name}/routes/apiRouter.js`, api),
        mkFile(`${name}/config/index.js`, config),
        mkFile(`${name}/controllers/errors.js`, errors)
      ]);
    })
    .then(() => {
      return install(
        `cd ${name} && npm init -y && npm i express --save && npm i nodemon -D`
      );
    })
    .then(() => {
      return addScripts(name);
    })
    .then(() => {
      console.log("A Server has been made");
    })
    .catch(err => {
      console.log(`Error:${err}`);
    });
};

const expressGenRoot = () => {
  Promise.all([
    mkDir(`controllers`),
    mkDir(`models`),
    mkDir(`routes`),
    mkDir(`spec`),
    mkDir(`config`),
    mkFile(`app.js`, app),
    mkFile(`${process.cwd()}/.gitignore`, gitignore),
    mkFile(`listen.js`, listen)
  ])
    .then(() => {
      return Promise.all([
        mkFile(`routes/apiRouter.js`, api),
        mkFile(`config/index.js`, config),
        mkFile(`controllers/errors.js`, errors)
      ]);
    })
    .then(() => {
      return install(`npm init -y && npm i -s express && npm i nodemon -D`);
    })
    .then(() => {
      return addScripts(process.cwd());
    })
    .then(() => {
      console.log("Server Made");
    })
    .catch(err => {
      console.log(`Error ${err}`);
    });
};

module.exports = { expressGen, expressGenRoot };
