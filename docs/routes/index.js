const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {tittle: 'Mi Primer Pagina con nodeJS'});
});

router.get('/contacto', (req, res) => {
    res.render('contacto');
});

module.exports = router;    