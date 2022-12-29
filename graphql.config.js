// const fs = require("fs");

const configPath = "./.cache/typegen/graphql.config.json";

// const config = fs.existsSync(configPath) ? require(configPath) : {};
const config = require(configPath);

module.exports = config;
