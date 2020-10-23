const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ahora estamos en la tuya')
});

router.get('/jugar', (req, res) => {
    res.send('juguemos futbol')
});


module.exports = router;