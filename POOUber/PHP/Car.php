<?php

require_once("Account.php");

class Car{
  public $id = integer;
  public $license = string;
  public $driver = string;
  public $passenger = integer;

  public function __construct($license, Account $driver){
    $this->license = $license;
    $this->driver = $driver;
  }

  public function getId(){
    return $this->id;
  }
  public function setId($id){
    $this->id = $id;
  }

  public function getLicense(){
    return $this->license;
  }
  public function setLicense($license){
    $this->license = $license;
  }

  public function getDriver(){
    return $this->driver;
  }
  public function setDriver($driver){
    $this->driver = $driver;
  }

  public function getPassenger(){
    return $this->passenger;
  }
  public function setPassenger($passenger){
    if ($passenger == 4){
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
      <br>
    ";
/*     echo "License: " . $this->license . " Driver: " . $this->driver->name . $this->driver->document . " Passenger: " . $this->passenger . "\n"; */
  }
}
?>