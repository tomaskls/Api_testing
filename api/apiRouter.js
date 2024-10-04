import express from 'express';

export const apiRouter = express.Router();

apiRouter.all('/', (req, res) => {
    return res.status(501).send('API: Not implemented');
});