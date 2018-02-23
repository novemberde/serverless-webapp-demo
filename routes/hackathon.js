const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.send("hackathon");
});

module.exports = router;