const pool = require('./pool');

async function getAllUsernames(){
    const {rows} = await pool.query("select * from usernames")
    return rows;
}

async function insertNewUser(username,email){
    await pool.query("insert into usernames (username,email) values ($1, $2)",[username,email]);
}

async function getUsername(searchParam){
    const {rows} = await pool.query(
        "select * from usernames where username ILIKE $1",
        [`%${searchParam}%`]
    );
    return rows;
}

async function deleteAllUsers(){
    await pool.query("truncate table usernames");
}

async function updateUser(id, username, email){
    await pool.query(
        "update usernames set username=$1, email=$2 where id=$3",
        [username, email, id]
    );
}

async function deleteUser(id){
    await pool.query("delete from usernames where id=$1",[id]);
}

module.exports = {
    getAllUsernames,
    getUsername,
    insertNewUser,
    deleteAllUsers,
    updateUser,
    deleteUser
}