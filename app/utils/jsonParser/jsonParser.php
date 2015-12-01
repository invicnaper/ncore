<?php
/*
 *        NcoreMVC
 *  @file : json parser
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/

class jsonParser{
    public $file = "";

    function __construct($file){
        $this->file = __DIR__."/../../storage/".$file;
    }

    public function parse(){
        $file_handle = fopen($this->file, "r");
        if(!$file_handle){
          exit();
        }
        $json = "";
        while (!feof($file_handle)) {
            $line = fgets($file_handle);
            $json = $json . $line;
          }
        fclose($file_handle);


        /* decode json */
        return json_decode($json);

    }

}
