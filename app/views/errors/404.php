<?php
/*
 *        NcoreMVC
 *  @file : hello view
 *  @Author : Hamza Bourrahim
*/


class error_404 extends \views\baseView{

    public static function render(){
        /* display header  */
        $tpl = new Template(hello::$template);
        $tpl->display('header.ncore.php');

        /* display body */
        $body = new Template(hello::$template);
        $body->display('404.ncore.php');

        /* display footer */
        $footer = new Template(hello::$template);
        $footer->display('footer.ncore.php');

    }

}
