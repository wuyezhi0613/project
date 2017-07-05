<?php
	header("Content-Type:text/html;charset=utf-8");
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","wyz123");
	
	//2）、选择数据库（找目的地）
	mysql_select_db("web1701",$conn);
	
	//3）、传输数据（过桥）
	$sqlstr = "select * from allgoods";
	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
			
	//查询列数
	$query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="[";
	
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($query_row){
    	$str = $str."{ 'Id':'".$query_row[0]."','title':'".$query_row[1]."'
		,'content':'".$query_row[2]."','img':'".$query_row[3]."'
		,'price':'".$query_row[4]."','songjifen':'".$query_row[5]."'
		,'typeId':'".$query_row[6]."'
		}";	

		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>