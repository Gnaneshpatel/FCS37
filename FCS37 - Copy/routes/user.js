const express = require("express");
const router = express.Router();

const {
  getUserById,
  updateUser,
  getAllUserFalse,
  getAllUserTrue,
  deleteUser,
  approveUser,
  getUser
} = require("../Controller/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../Controller/auth");

router.param("userId", getUserById);
router.get("/getAllUserFalse", getAllUserFalse);
router.delete("/deleteUser/:userId", deleteUser);

router.get("/getAllUserTrue", getAllUserTrue);

router.get("/user/:userId",  getUser);
router.put("/user/:userId",  updateUser);
router.put("/userapprove/:userId",  approveUser);


module.exports = router;
