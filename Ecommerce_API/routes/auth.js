const router = require("express").Router();

const Controller = require("../controllers/auth");
//register send information
router.post("/register", Controller.registerUser);
router.post("/login", Controller.loginUser);

module.exports = router;