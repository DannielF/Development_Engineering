class User extends Account{
  String email;
  String password;

  public User(String name, String document, String email, String password){
    super(name, document);
    this.email = email;
    this.password = password;
  }
}