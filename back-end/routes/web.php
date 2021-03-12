<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/v1', 'namespace' => 'Movie'], function () use ($router) {
    $router->get('/movies', 'MovieController@index');
    $router->post('movies', 'MovieController@store');
    $router->get('/movie/{id}', 'MovieController@show');
    $router->put('/movie/{id}', 'MovieController@update');
    $router->delete('/movie/{id}', 'MovieController@destroy');
});
