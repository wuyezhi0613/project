<?php
    header("content-type","text/html;charset=utf-8");
    //一、接收前端传来的数据
    $tel = $_POST["tel"]; 
    $pwd = $_POST["pwd"];  
    //1、建立连接并选择数据库
    $con = mysql_connect("localhost","root","wyz123");
    if(!$con){
        echo "0";
	}
    mysql_select_db("web1701",$con);
    //2、执行SQL语句
    $sqlStr = "insert into userTable(tel,pwd)
            values('".$tel."','".$pwd."')";
    mysql_query($sqlStr,$con);
    //3、关闭数据库
    mysql_close($con);   

?>