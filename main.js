'use strict';

const { db } = require('./server/db');
const app = require('./server');
const PORT = 4000;
const chalk = require('chalk');
const seed = require('./seed');

db.sync({ force: true })
  .then(() => {
    console.log(chalk.cyan('db synced'));
    return seed();
  })
  .then(() => {
    console.log(chalk.cyan('routes and videos seeded'));
    app.listen(PORT, () =>
      console.log(
        chalk.greenBright(`Server is listening on http://localhost:${PORT}`)
      )
    );
  })
  .catch(error => console.log(chalk.cyan('error syncing db', error)));
