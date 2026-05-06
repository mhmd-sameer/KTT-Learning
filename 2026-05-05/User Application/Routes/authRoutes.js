const {Router} = require('express');

const authRouter = Router();
const authController = require("../Controllers/authControllers");

authRouter.get("/", authController.signUpGet);

authRouter.post("/", authController.signUpPost);

authRouter.get("/login", authController.logInGet);

authRouter.post("/login", authController.logInPost);

module.exports = authRouter;