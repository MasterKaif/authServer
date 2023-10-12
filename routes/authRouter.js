const express = require("express");
const {
	accessToken,
	refreshAccessToken,
	validate,
} = require("../controller/auth.controller");
const router = express.Router();

router.post("/getAccessToken", accessToken);
router.post("/refresh", refreshAccessToken);
router.get("/authorize", validate);
module.exports = router;
