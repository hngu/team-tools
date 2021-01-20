const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

let fileContents = fs.readFileSync(path.resolve(__dirname, './proxy.yaml'), 'utf8');
let data = yaml.load(fileContents);

console.log(data);
module.exports = data;