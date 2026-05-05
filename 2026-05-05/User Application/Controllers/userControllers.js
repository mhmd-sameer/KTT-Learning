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

async function createUsernameGet(req, res){
    res.render("form");
}

async function createUsernamePost(req,res){
    const {username,email} = req.body;
    await db.insertNewUser(username,email);
    res.redirect("/");
}

async function deleteUsers(req,res) {
    await db.deleteAllUsers();
    res.redirect("/");
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
    res.redirect("/");
}

async function deleteUserById(req,res) {
    const {id} = req.params;

    await db.deleteUser(id);
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    getUsername,
    deleteUsers,
    getUpdateForm,
    updateUser,
    deleteUserById
}

