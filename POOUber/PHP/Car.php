<?php

require_once 'Account.php';

class Car{
  public $id = integer;
  public $license = string;
  public $driver = string;
  public $passenger = string;

  public function __construct($license, Account $driver){
    $this-> license = $license;
    $this-> driver = $driver;
  }
  public function printDataCar(){
    echo "License: " . $this->license . "Driver: " . $this->driver->name . $this->driver->document;
  }
}

?>