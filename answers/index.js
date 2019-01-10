const env = process.env.NODE_ENV || 'development';
const config = require(`./answers.${env}.js`);

module.exports = config;