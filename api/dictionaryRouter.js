import express from 'express';

export const dictionaryRouter = express.Router();

dictionaryRouter.get('/', (req, res) => {
    return res.status(501).send('API: Not implemented');
});