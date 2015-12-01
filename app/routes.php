<?php
/*
 *        NcoreMVC
 *  @file : routes.php
 *  @Author : Hamza Bourrahim
*/

use malkusch\autoloader\Autoloader;

require __DIR__ . "/../vendor/autoloader/autoloader.php";


use PHPRouter\RouteCollection;
use PHPRouter\Router;
use PHPRouter\Route;
try{

  $collection = new RouteCollection();
  $collection->attachRoute(new Route('/', array(
      '_controller' => 'itemsFeaturedController::index',
      'methods' => 'GET'
  )));

  $collection->attachRoute(new Route('/hello', array(
      '_controller' => 'itemsFeaturedController::index',
      'methods' => 'GET'
  )));

  $router = new Router($collection);
  $router->setBasePath('/');
  $route = $router->matchCurrentRequest();

  ErrorHandling::error_404($route);

}catch(Exception $e){

}
