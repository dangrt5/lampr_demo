<?php

$tempPostData = file_get_contents("php://input");

$_POST = json_decode($tempPostData, true);


echo "<pre>";
print_r($_POST);
echo "</pre>";
