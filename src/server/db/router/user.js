const express = require("express");
const router = express.Router();
import auth from "../middleware/authentification";
const userCtrl = require("../controller/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post("/", userCtrl);
router.post("/profile/:userId", auth, userCtrl);

module.exports = router;
