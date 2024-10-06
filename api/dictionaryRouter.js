import express from 'express';

const dictionary = [];

export const dictionaryRouter = express.Router();

dictionaryRouter.get('/', (req, res) => {
    return res.status(200).json({ dictionary });
});
dictionaryRouter.post('/', (req, res) => {
console.log(req.body);

    dictionary.push(req.body.word);
    return res.status(201).json({
        status: 'success',
        msg: 'Naujas zodis priimtas'
     });
});
dictionaryRouter.put('/', (req, res) => {
    return res.status(501).send('API: (put) Not implemented');
});
dictionaryRouter.delete('/', (req, res) => {
    return res.status(501).send('API: (del) Not implemented');
});