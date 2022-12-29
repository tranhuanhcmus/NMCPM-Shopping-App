const controller = require("../controllers/product");
const router = require("express").Router();
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

//Create
router.post("/", verifyTokenAndAdmin, controller.createProduct);

//update
router.put("/:id", verifyTokenAndAdmin, controller.updateProductbyId);

//delete
router.delete("/:id", verifyTokenAndAdmin, controller.deleteProductbyId);

//get
router.get("/find/:id", controller.getProductbyId);

//get All
router.get("/", controller.getAllProducts);

module.exports = router;