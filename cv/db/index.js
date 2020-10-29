const pgp = require("pg-promise")();
const connectionString =
    "postgresql://postgres:dlucj15@localhost:5432/web";

const db = pgp(connectionString);

module.exports = db;