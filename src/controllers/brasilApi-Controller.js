'use strict';

const axios = require('axios')
const utils = require('../helpers/util');

exports.getBancos = async (req, res, next) => {
    try {
      const urlApi = 'https://brasilapi.com.br/api/banks/v1';
  
      axios.defaults.timeout = 5000; // 5 segundos
      const response = await axios.get(urlApi);
      res.json(response.data);

    } catch (error) {
        console.error(utils.endpointError(error));

        // Informa ao express que ocorreu e um erro 
        // e que o middleware  de tratamento de erro deve ser chamado
        next(error);
      }
  };

  exports.getBanco = async (req, res, next) => {
    try {
        var urlApi = `https://brasilapi.com.br/api/banks/v1/${req.params.id}`
  
      axios.defaults.timeout = 5000; // 5 segundos
      const response = await axios.get(urlApi);
      res.json(response.data);

    } catch (error) {
      console.error(utils.endpointError(error));

      // Informa ao express que ocorreu e um erro 
      // e que o middleware  de tratamento de erro deve ser chamado
      next(error);
    }
  };
















