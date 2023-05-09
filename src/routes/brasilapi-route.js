const express = require('express');
const controller = require('../controllers/brasilApi-Controller')

const brasilApi = express.Router();

brasilApi.route('/api/brasilApi/bancos')
         .get(controller.getBancos)

brasilApi.route('/api/brasilApi/banco/:id')
        .get(controller.getBanco)

module.exports = brasilApi;
