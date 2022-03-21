const { Router } = require('express');
const saveCard = require('./controllers/saveCard');

const apiRouter = new Router();

apiRouter.post('/save-card', saveCard);



exports.apiRouter = apiRouter;
