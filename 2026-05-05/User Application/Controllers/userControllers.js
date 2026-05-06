const db = require("../db/queries");


async function getUsernames(req, res){
    const data = await db.getAllUsernames();
    console.log(data);
    
    res.render("home",{
        title :"User Details",
        data : data,
    });
}

async function getUsername(req, res){
    const searchParam = req.query.search;
    if(!searchParam){
        return res.redirect("/");
    }
    const data = await db.getUsername(searchParam);
    res.render("home",{
        title : "Search Results",
        data : data,
    });
}

async function createUserGet(req, res){
    res.render("form");
}

async function createUserPost(req,res){
    const {username,email,password,role} = req.body;
    await db.insertNewUser(username,email,password,role || 'EMPLOYEE');
    res.redirect("/home");
}

async function deleteUsers(req,res) {
    await db.deleteAllUsers();
    res.json({success: true, message: "All users deleted", redirect: "/home"});
}

async function getUpdateForm(req, res) {
    const {id} = req.params;
    const users = await db.getAllUsernames();
    const user = users.find(u => u.id == id);
    
    if(!user) {
        return res.status(404).send("User not found");
    }
    
    res.render("update", {
        user: user
    });
}

async function updateUser(req, res) {
    const {id} = req.params;
    const {username, email} = req.body;
    
    await db.updateUser(id, username, email);
    res.json({success: true, message: "User updated", redirect: "/home"});
}

async function deleteUserById(req,res) {
    const {id} = req.params;

    await db.deleteUser(id);
    res.json({success: true, message: "User deleted", redirect: "/home"});
}

module.exports = {
    getUsernames,
    createUserGet,
    createUserPost,
    getUsername,
    deleteUsers,
    getUpdateForm,
    updateUser,
    deleteUserById
}

