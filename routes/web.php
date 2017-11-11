<?php

$router->view('/', 'app');

$router->get('/{vue_capture?}', function () {
    return view('app');
})->where('vue_capture', '[\/\w\.-]*');
