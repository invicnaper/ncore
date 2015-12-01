<?php
/*
 *        NcoreMVC
 *  @file : hello view
 *  @Author : Hamza Bourrahim and Quentin Jeanneaud
*/


class hello extends \views\baseView{

    public static function render(){
        /* display header  */
        $tpl = new Template(hello::$template);
        $tpl->display('header.ncore.php');

        /* display body */
        $body = new Template(hello::$template);
        //$body->assign('header_title','Ncore MVC');
        //$body->assign('hello','Your website demo');
        $body->display('body.ncore.php');

        /* display footer */
        $footer = new Template(hello::$template);
        //$footer->assign('description', 'Ncore MVC by hamza');
      //  $footer->assign('url', 'http://naper.eu');
      //  $footer->assign('website', 'naper.eu');
        $footer->display('footer.ncore.php');

    }

}
