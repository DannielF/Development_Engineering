<?php

require_once( "Car.php");
require_once( "UberX.php");
require_once( "UberVan.php");
require_once( "Account.php");

echo "<h1>" . "Object Oriented Programming" . "<h1>";

$uberX = new UberX("HDP666", new Account("DAN ", "6655443322"), "Toyota", "Corolla");
$uberX->setPassenger(4);
$uberX->printDataCar();

$uberVan = new UberVan("AJI888", new Account("Jhon Doe", "544237"), "Nissan", "Gallito");
$uberVan->setPassenger(6);
$uberVan->printDataCar();

$car = new Car("AJI000 ", new Account("Gold Member ", "010467321"));
$car ->printDataCar();

?>
