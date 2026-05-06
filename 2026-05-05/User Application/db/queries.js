const pool = require('./pool');


async function getAllUsernames(){
    const {rows} = await pool.query("select employee_id as id, name as username, email, role from employees");
    return rows;
}

async function insertNewUser(username,email,password,role){
    await pool.query("insert into employees (name, email, password, role) values ($1, $2, $3, $4)",[username,email,password,role]);
}

async function getUsername(searchParam){
    const {rows} = await pool.query(
        "select employee_id as id, name as username, email, role from employees where name ILIKE $1",
        [`%${searchParam}%`]
    );
    return rows;
}

async function getUserByEmail(email){
    const {rows} = await pool.query("select * from employees where email=$1",[email]);
    return rows[0];
}
async function deleteAllUsers(){
    await pool.query("truncate table employees");
}

async function updateUser(id, username, email){
    await pool.query(
        "update employees set name=$1, email=$2 where employee_id=$3",
        [username, email, id]
    );
}

async function deleteUser(id){
    await pool.query("delete from employees where employee_id=$1",[id]);
}

module.exports = {
    getAllUsernames,
    getUsername,
    insertNewUser,
    deleteAllUsers,
    updateUser,
    deleteUser,
    getUserByEmail
}