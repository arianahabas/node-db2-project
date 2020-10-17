const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.json({
		message: "Ayy!!!  we are up and 🏃‍♂️! ",
	})
})

module.exports = router