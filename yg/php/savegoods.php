<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$Id   = $_REQUEST['Id'];
	$title = $_REQUEST['title'];
	$content= $_REQUEST['content'];
	$img = $_REQUEST['img'];
	$price = $_REQUEST['price'];
	$songjifen = $_REQUEST['songjifen'];
	$typeId  = $_REQUEST['typeId'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$con = mysql_connect("localhost","root","wyz123");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("web1701",$con);
	
	//3）、传输数据（过桥）
	//insert语句
	$sqlstr = "insert into allgoods values('".$Id."','".$title."','".$content."'
	,'".$img."','".$price."','".$songjifen."','".$typeId."')";
	//echo($sqlstr);
	
	mysql_query($sqlstr,$con);
	
	//4）、关闭连接（拆桥）
	mysql_close($con);
	
	//3、给客户端返回（响应）一个注册成功！
	echo "保存成功";
?>