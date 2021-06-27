from account import Account


class Car:
    id = int
    license = str
    driver = Account('', '')
    passenger = str

    def __init__(self, license, driver) -> None:
        self.license = license
        self.driver = driver
