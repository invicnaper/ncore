# ncore
a tiny framework for php

# README #

This README would normally document whatever steps are necessary to get facetracker up and running.

![alt text](https://cdn1.iconfinder.com/data/icons/mayssam/512/Coding-128.png "nCore logo")

### What is this repository for? ###

* Share nCore framework code
* nCore is a tiny framework that allows you to quickly write simple web site
* nCore is inspired from Laravel using slim framework as a library and AltoRouter combined with another one as PHP router .
* Version 0.1

### Features ###

* PHP router
* MVC architecture
* Framework strcture similar to laravel concept
* Template Engine 
* Doctrine ORM
* Error handling

### Screen ###


![alt text](http://nsa38.casimages.com/img/2015/12/01/151201111922911463.png "ncore screen")

### How do I get set up? ###

Download source code , then use composer to install required projects

    $ composer install
    

### Example page ###

the routes.php file contains : 
`
```php
$collection = new RouteCollection();

$collection->attachRoute(new Route('/hello', array(
      '_controller' => 'testController::index',
      'methods' => 'GET'
)));

$router = new Router($collection);
$router->setBasePath('/');
$route = $router->matchCurrentRequest();

ErrorHandling::error_404($route);
```
      
  which means that if you request : <b>HOST/public/hello</b> , it will be routed to testController and calling the function index() .
  
  the function index() contains : 
  
      hello::render();
      
  The controller is calling the view to render the content . 
  
  our render function contains 

```php
/* display header  */
$tpl = new Template(hello::$template);
$tpl->display('header.ncore.php');

/* display body */
$body = new Template(hello::$template);
$body->display('body.ncore.php');

/* display footer */
$footer = new Template(hello::$template);
$footer->display('footer.ncore.php');
```
        
  we create our template , and render the header , body and footer .  The header.ncore.php contain html and php code . 
  
  
### Contributors ###

* Hamza Bourrahim

