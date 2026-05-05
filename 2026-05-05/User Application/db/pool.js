const {Pool} = require('pg');

module.exports = new Pool({
    host : "localhost",
    user : "postgres",
    database : "top_users",
    password : "Sameer@28",
    port : 5432,

});