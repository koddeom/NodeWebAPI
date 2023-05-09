'use strict';
const utils = require('../helpers/util');

exports.getHome = async (req, res, next) => {
    try { // renderiza a pagina 'html' index.ejs
        
        var data = {
            welcome: 'Olá você está na raiz desa coleção de endpoints',
            notToDoHere: 'Não tem nada para fazer aqui'
        };

        res.json(data);
        //res.render('index', {title: 'Express'});

    } catch (error) {
        console.error(utils.endpointError(error));

        // Informa ao express que ocorreu e um erro
        // e que o middleware  de tratamento de erro deve ser chamado
        next(error);
    }
}
