import express from "express"; // ES6
//ES5 tương tự: const express = require('express');
let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // tuong tu jsp,blade for if else
    app.set("views","./src/views");
}

module.exports = configViewEngine;