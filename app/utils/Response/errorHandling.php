<?php
/*
 *        NcoreMVC
 *  @file : routes.php
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/

class ErrorHandling{

  public static function error_404($obj){
      if($obj == false){
          /* call a view to render error */
          error_404::render();
      }
  }

}
