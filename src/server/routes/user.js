const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/checkusername", userCtrl.checkUsername);
router.get("/checkemail", userCtrl.checkEmail);

module.exports = router;
