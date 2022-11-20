/* eslint-disable no-unused-vars */
const router = require('express').Router();
const User = require('../models/User');
const Accounts = require('../models/Accounts');
const Transactions = require('../models/Transactions');

router.get('/', async(req, res) => {
    res.status(200).json({message: 'Funcionando!!'});
});

module.exports = router;