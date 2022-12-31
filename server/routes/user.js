const controller = require("../controllers/user");
const router = require("express").Router();
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

//update
router.put("/:id", verifyTokenAndAuthorization, controller.updateUserbyId);

//delete
router.delete("/:id", verifyTokenAndAuthorization, controller.deleteUserbyId);

//get
router.get("/find/:id", verifyTokenAndAdmin, controller.getUserbyId);

//get All
router.get("/", verifyTokenAndAdmin, controller.getAllUsers);
//get Stats
router.get("/stats", verifyTokenAndAdmin, controller.getStats);

module.exports = router;