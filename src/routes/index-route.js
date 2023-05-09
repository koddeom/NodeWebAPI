const express = require('express');
const controller = require('../controllers/index-controller')

// ? Aponta a rota para o verbo correto no controller
const home = express.Router();

home.route('/api/home')
    .get(controller.getHome)

module.exports = home;
