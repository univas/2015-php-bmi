<?php
require 'BMIService.class.php';

$weight = $_GET['weight'];
$height = $_GET['height'];
$bmiIndex = 0.0;

if(is_numeric($weight) && is_numeric($height)) {
    $bmiIndex = BMIService::getIndex($weight, $height);
}

echo $bmiIndex;
?>