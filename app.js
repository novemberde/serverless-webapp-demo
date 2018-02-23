const express = require("express");
const app = express();

app.use("/ht", require("./routes/hackathon"));
app.get("/test", (req, res, next) => {
    res.send("Test success");
});

module.exports = app;