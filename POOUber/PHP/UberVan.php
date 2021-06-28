<?php
require_once("Car.php");

class UberVan extends Car {
  public $typeCarAccepted;
  public $seatsMaterial;

  public function __construct($license, $driver, $typeCarAccepted, $seatsMaterial){
    parent::__construct($license, $driver);
    $this->typeCarAccepted = $typeCarAccepted;
    $this->seatsMaterial = $seatsMaterial;
  }

  public function setPassenger($passenger){
    if ($passenger == 6){
      $this->passenger = $passenger;
    }else{
      echo"You need at least 6 seats";
    }
  }
}
?>