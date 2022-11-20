/* eslint-disable no-unused-vars */
const router = require('express').Router();
require('../models/User');
require('../models/Accounts');
require('../models/Transactions');

router.get('/', async(req, res) => {
    res.status(200).json({message: 'Funcionando!!'});
});

module.exports = router;