"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.get("/", function (req, res, next) {
            res.send("Hello world");
        });
    }
    App.bootstrap = function () {
        return new App();
    };
    return App;
}());
exports.default = App;
