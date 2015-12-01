<?php
/*
 *        NcoreMVC
 *  @file : testModel
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/

class itemsFeatured {

  public static $data;

  public static function getAll(){
      /* file must be on storage */
      $jsonParser = new jsonParser("featuredItems.json");
      $result = $jsonParser->parse();
      itemsFeatured::$data = $result;
  }

  public static function getData($id,$item){
      itemsFeatured::getAll();

      return itemsFeatured::$data->{$id}->{$item};
  }

}
