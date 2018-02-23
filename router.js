const router = require("express").Router();

router.get("/hi", (req, res, next) => {
    res.send("hihihi");
});
router.get("/hi/hi", (req, res, next) => {
    res.send("hihihi");
});

module.exports = router;