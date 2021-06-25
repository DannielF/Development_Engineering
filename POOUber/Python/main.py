from account import Account
from car import Car

if __name__ == "__main__":
    car = Car('HDP66', Account('Jose galarga', '35688432'))
    print(vars(car))
    print(vars(car.driver))
