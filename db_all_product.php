<?php
function getAllProduct(){
	include 'db_connecter.php';

	$conn 		= OpenCon();
	$sql 		= "SELECT * FROM t_product ORDER BY product_id DESC;";
	$result 	= mysqli_query($conn, $sql);

	CloseCon($conn);

	return $result;
}

?>