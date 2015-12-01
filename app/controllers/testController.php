<?php
/*
 *        NcoreMVC
 *  @file : testController
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/

class testController {

  public function index(){
      /* calling view  */
      $test = Config::getElemnt("DEBUG");
      hello::render();
  }

}
