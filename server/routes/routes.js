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

routes.get('/product',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'product' , 'index.html'));
});

routes.get('/dist/assets/css/hacka-geral.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-geral.css'));
})

routes.get('/dist/assets/css/hacka-category.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-category.css'));
})

routes.get('/dist/assets/js/hacka-product.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','js', 'hacka-product.js'));
})
routes.get('/dist/assets/js/hacka-search.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','js', 'hacka-search.js'));
})

routes.get('/dist/assets/js/hacka-geral.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','js', 'hacka-geral.js'));
})


routes.get('/dist/assets/css/hacka-home.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..' , 'dist' ,'assets' ,'css' ,'hacka-home.css'));
})

routes.get('/assets/img/search.svg', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'search.svg'));
})

routes.get('/dist/assets/css/hacka-product.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-product.css'));
})


module.exports = routes;