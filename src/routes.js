const { Router } = require("express");

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json('Routes is ok');
})

module.exports = routes;