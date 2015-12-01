<?php
/*
 *        NcoreMVC
 *  @file : config.php
 *  @Author : Hamza Bourrahim
*/


class Config{

    public static $arr_conf;

    private static function loadconf(){
        Config::$arr_conf = require_once __DIR__."/../config/ncore.php";
    }
    public static function getElemnt($element){
        Config::loadconf();

        return Config::$arr_conf[$element];
    }

}
