<?php

require_once( "Car.php");
require_once( "UberX.php");
require_once( "Account.php");

echo "<h1>" . "Object Oriented Programming" . "<h1>";

$uberX = new UberX("HDP66", new Account("DAN ", "6655443322"), "Toyota", "Corolla");
$uberX-> printDataCar();

echo ' ';

$car = new Car("AJI000 ", new Account("Gold Member ", "010467321"));
$car -> printDataCar();

?>
