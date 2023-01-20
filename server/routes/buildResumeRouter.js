import express from "express";

import buildResumeController from "../controllers/buildResumeController.js";

const router = express.Router();




router.post("/generate", buildResumeController.generate);
// router.post("/login", userAuthController.login);



// router
//   .route("/")
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// router
//   .route("/:id")
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);

export default router;
