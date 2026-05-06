const db = require("../db/queries");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signUpGet(req, res){
    res.render("signUp");
}

async function signUpPost(req,res){
    const {username, email, password, role} = req.body;

    try {
        const hashed = await bcrypt.hash(password, 10);
        await db.insertNewUser(username, email, hashed, role);
        return res.redirect("/login");
    } catch(err) {
        console.log(err);
        return res.status(500).send("Sign up Error");
    }
}

async function logInGet(req,res){
    res.render("login");
}

async function logInPost(req,res){
    const {email, password} = req.body;

    try {
        const user = await db.getUserByEmail(email);

        if(!user){
            return res.status(401).send("User not found");
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match){
            return res.status(401).send("Invalid Password");
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.redirect("/home");
    } catch(err) {
        console.log(err);
        return res.status(500).send("Login Error");
    }
}

module.exports = {
    signUpGet,
    signUpPost,
    logInGet,
    logInPost
}