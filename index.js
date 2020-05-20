const fs = require('fs');
const path = require('path');

const config = fs.readFileSync(path.join(__dirname, '.eslintrc.json')).toString();

module.exports = JSON.parse(config);
