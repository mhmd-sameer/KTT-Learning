const {Router} = require('express');

const userController = require('../Controllers/userControllers');
const userRouter = Router();

userRouter.get("/",userController.getUsernames)

userRouter.get("/search",userController.getUsername)

userRouter.get("/new",userController.createUsernameGet)

userRouter.post("/new",userController.createUsernamePost)

userRouter.get("/delete",userController.deleteUsers)

userRouter.get("/update/:id",userController.getUpdateForm)

userRouter.post("/update/:id",userController.updateUser)

userRouter.get("/delete/:id",userController.deleteUserById);

module.exports = userRouter;