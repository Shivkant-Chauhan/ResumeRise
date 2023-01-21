const express = require("express");

const userAuthController = require("./../controllers/userAuthController");

const router = express.Router();

router.post("/signup", userAuthController.signup);
router.post("/login", userAuthController.login);

// router
//   .route("/")
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
