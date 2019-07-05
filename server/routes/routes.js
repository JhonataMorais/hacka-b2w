const express = require('express');
const routes = express.Router();
const path = require('path')

routes.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'home' , 'index.html'));
});

routes.get('/search',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'search' , 'index.html'));
});

routes.get('/qrcode',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'qrcode' , 'index.html'));
});

routes.get('/cart',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'cart' , 'index.html'));
});

routes.get('/dist/assets/css/hacka-geral.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-geral.css'));
})

routes.get('/dist/assets/css/hacka-fontawesome.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-fontawesome.css'));
})

routes.get('/dist/assets/css/hacka-home.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'dist' ,'assets' ,'css' ,'hacka-home.css'));
})

routes.get('/dist/assets/css/hacka-cart.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'dist' ,'assets' ,'css' ,'hacka-cart.css'));
})


module.exports = routes;