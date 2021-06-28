<?php
require_once('Account.php');

class User extends Account{
  public $email;
  public $password;

  public function __construct($name, $document, $email, $password){
    parent::__construct($name, $document);
    $this-> email = $email;
    $this-> password = $password;
  }
}
?>