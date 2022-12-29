const controller = require("../controllers/order");
const router = require("express").Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

//Create
router.post("/", verifyToken, controller.createOrder);

//update
router.put("/:userId", verifyTokenAndAuthorization, controller.updateOrder);

//delete
router.delete("/:userId", verifyTokenAndAuthorization, controller.deleteOrder);

//get
router.get("/find/:userId", verifyTokenAndAuthorization, controller.getOrder);

//get All
router.get("/", verifyTokenAndAdmin, controller.getAll);

//get Stats
router.get("/income", verifyTokenAndAdmin, controller.getStats);
module.exports = router;