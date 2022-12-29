const controller = require("../controllers/cart");
const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

//Create
router.post("/", verifyToken, controller.createCart);

//update
router.put("/:userId", verifyTokenAndAuthorization, controller.updateCart);

//delete
router.delete("/:userId", verifyTokenAndAuthorization, controller.deleteCart);

//get
router.get("/find/:userId", verifyTokenAndAuthorization, controller.getCart);

//get All
router.get("/", verifyTokenAndAdmin, controller.getAll);

module.exports = router;