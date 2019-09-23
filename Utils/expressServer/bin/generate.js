#! /usr/bin/env node

const { expressGen, expressGenRoot } = require("../scripts/expressGenerator");

process.argv[2] ? expressGen(process.argv[2]) : expressGenRoot();
