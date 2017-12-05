"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var port = Number(process.env.PORT) || 3000;
var app = new App_1.default().app;
app.listen(port, function () {
    console.log("Server is running on " + port);
})
    .on('error', function (err) {
    console.error(err);
});
