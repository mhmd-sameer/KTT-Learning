const {Router} = require('express');

const userController = require('../Controllers/userControllers');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/authRoles');
const userRouter = Router();

userRouter.use(verifyToken);

userRouter.get("/home", userController.getUsernames);
userRouter.get("/search", userController.getUsername);
userRouter.get("/new", userController.createUserGet);
userRouter.post("/new", authorizeRoles("HR","ADMIN"), userController.createUserPost);
userRouter.delete("/", userController.deleteUsers);
userRouter.get("/update/:id", userController.getUpdateForm);
userRouter.put("/update/:id", userController.updateUser);
userRouter.delete("/delete/:id", userController.deleteUserById);

module.exports = userRouter;