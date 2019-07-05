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

routes.get('/cart',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'cart' , 'index.html'));
});

routes.get('/cupom',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'cupom' , 'index.html'));
});

routes.get('/scanner-cupom',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'scanner-cupom' , 'index.html'));
});

routes.get('/checkout',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'checkout' , 'index.html'));
});

routes.get('/pedidos',(req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'views', 'pedidos' , 'index.html'));
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
    res.sendFile(path.resolve(__dirname, '..' , '..', 'dist' ,'assets' ,'css' ,'hacka-home.css'));
})

routes.get('/dist/assets/css/hacka-cart.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'dist' ,'assets' ,'css' ,'hacka-cart.css'));
})


routes.get('/dist/assets/css/hacka-checkout.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'dist' ,'assets' ,'css' ,'hacka-checkout.css'));
})

routes.get('/assets/img/search.svg', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'search.svg'));
})

routes.get('/assets/img/green-circle.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'green-circle.png'));
})

routes.get('/assets/img/logo-ame.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'logo-ame.png'));
})

routes.get('/assets/img/cartao.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'cartao.png'));
})

routes.get('/assets/img/boleto.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'boleto.png'));
})

routes.get('/assets/img/red-circle.png', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'red-circle.png'));
})

routes.get('/assets/img/qrcode.svg', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..' , '..', 'src' ,'assets' ,'img' ,'qrcode.svg'));
})

routes.get('/dist/assets/css/hacka-product.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-product.css'));
})

routes.get('/dist/assets/css/hacka-pedidos.css', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','css', 'hacka-pedidos.css'));
})

routes.get('/dist/assets/js/hacka-cart.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','js', 'hacka-cart.js'));
})
routes.get('/dist/assets/js/hacka-checkout.js', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist','assets','js', 'hacka-checkout.js'));
})


module.exports = routes;