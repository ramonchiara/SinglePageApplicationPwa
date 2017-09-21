'use strict';

importScripts('js/libs/sw-toolbox/sw-toolbox.js');

toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'js/libs/twitter-bootstrap/css/bootstrap.css',
    'js/libs/twitter-bootstrap/css/bootstrap-theme.css',
    'js/libs/jquery/jquery.js',
    'js/libs/twitter-bootstrap/js/bootstrap.js',
    'js/libs/angular.js/angular.js',
    'js/libs/angular.js/angular-route.js',
    'js/loja.js',
    'produtos.json',
    'views/principal.html',
    'views/produto.html'
]);

toolbox.router.get('index.html', toolbox.cacheFirst);
toolbox.router.get('js/libs/*', toolbox.networkFirst);
toolbox.router.get('js/loja.js', toolbox.cacheFirst);
toolbox.router.get('produtos.json', toolbox.cacheFirst);
toolbox.router.get('views/*', toolbox.cacheFirst);

toolbox.router.get('/100/100/abstract/*/', toolbox.cacheFirst, {
    origin: 'http://lorempixel.com'
});

toolbox.router.get('*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});