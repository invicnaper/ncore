<?php
/*
 *        NcoreMVC
 *  @file : autoload.php
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

/*
 * Register The Composer Auto Loader
*/

require __DIR__.'/../vendor/autoload.php';

/*
 *  calling the routes.php
*/

require __DIR__.'/../app/routes.php';

/*
 *    Doctrine Entity manager
*/

$paths = array("/path/to/entity-files");
$isDevMode = false;

// the connection configuration
$dbParams = array(
    'driver'   => 'pdo_mysql',
    'user'     => 'root',
    'password' => '',
    'dbname'   => 'foo',
);

$config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);
$entityManager = EntityManager::create($dbParams, $config);
