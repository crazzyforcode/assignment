const express = require("express");
const router = express.Router();
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");

//Actual routes
//create
router.post(
  "/business/create/:userId",
  isSignedIn,
  isAuthenticated,
  createBusiness
);
//read
router.get(
  "/business/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getBusiness
);


module.exports = router;
