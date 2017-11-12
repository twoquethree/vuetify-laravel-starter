<?php

/*
 * Auth routes
 */

$router->namespace('Auth')
        ->prefix('v1')
        ->group(function ($router) {
            $router->post('login', 'AuthController@login')->name('login');
            $router->post('logout', 'AuthController@logout')->name('logout');
            $router->post('refresh', 'AuthController@refresh')->name('refresh');
            $router->post('me', 'AuthController@me')->name('me');
        });
