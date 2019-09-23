const fs = require("fs");
const path = require("path");

exports.api = fs.readFileSync(path.join(__dirname, "./apiRouter.js"));
exports.app = fs.readFileSync(path.join(__dirname, "./app.js"));
exports.listen = fs.readFileSync(path.join(__dirname, "./listen.js"));
exports.config = fs.readFileSync(path.join(__dirname, "./config.js"));
exports.gitignore = fs.readFileSync(path.join(__dirname, "./gitignore.txt"));
exports.errors = fs.readFileSync(path.join(__dirname, "./errors.js"));
