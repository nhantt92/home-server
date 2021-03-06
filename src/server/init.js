require('dotenv/config');

const db = require('./lib/db');
const defaultConfig = require('./config');

(async function main() {
  await db.set('heater.config', JSON.stringify(defaultConfig));
  console.log('Default config set:', defaultConfig);
  await db.end();
})();
