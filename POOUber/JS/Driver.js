class Driver extends Account {
  constructor(name, document, email, password) {
    super(name, document)
    this.email = email
    this.password = password
  }
}