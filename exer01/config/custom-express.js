const express = require('express');
const consign = require('consign');

module.exports = function() {
    const app = express();

    consign()
        .include('routers')
        .into(app);

    return app;
}