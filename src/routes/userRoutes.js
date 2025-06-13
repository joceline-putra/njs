const express = require("express");
const router = express.Router();
const path                = require('path');

const userController = require("../controllers/userController");

// router.get("/user", userController.page);
router.get("/", (req, res) => 
    res.sendFile(
        path.join(__dirname, '../../public/user.html')
    )
);
router.post("/", userController.index);
router.get("/read/:id", userController.getUsers);

router.post("/create", userController.createUser);
router.post("/update", userController.updateUser);
router.post("/delete", userController.deleteUser);

module.exports = router;