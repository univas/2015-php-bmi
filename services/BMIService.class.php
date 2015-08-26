<?php
class BMIService {
    
    public static function getIndex($weight, $height) {
        return $weight / ($height * $height);
    }
    
}
?>