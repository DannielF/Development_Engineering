from account import Account


class Driver(Account):
    email: str
    password: str

    def __init__(self, name, document, email, password) -> None:
        super().__init__(name, document)
        self.email = email
        self.password = password
