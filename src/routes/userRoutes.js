const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", userController.page);
router.post("/", userController.index);

// router.get("/create", userController.showForm);
router.get("/read/:id", userController.getUsers);

router.post("/create", userController.createUser);
router.post("/update", userController.updateUser);
router.post("/delete", userController.deleteUser);

module.exports = router;