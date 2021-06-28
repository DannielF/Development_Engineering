<?php
require_once("Car.php");

class UberX extends Car {
  public $brand;
  public $model;

  public function __construct($license, $driver, $brand, $model){
    parent::__construct($license, $driver);
    $this->brand = $brand;
    $this->model = $model;
  }

  public function setPassenger($passenger){
    if($passenger == 4){
      $this->passenger = $passenger;
    }else{
      echo"You need at least 4 seats";
    }
  }

  public function printDataCar(){
    echo "
      License: $this->license
      Driver: {$this->driver->name}
      Document: {$this->driver->document}
      Passengers: $this->passenger
      Brand: $this->brand
      Model: $this->model
      <br>
    ";
  }
}
?>