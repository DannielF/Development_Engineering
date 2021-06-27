from car import Car


class UberBlack(Car):
    type_car_accepted = []
    seats_material = []

    def __init__(self, license, driver, type_car_accepted, seats_material) -> None:
        super().__init__(license, driver)
        self.type_car_accepted = type_car_accepted
        self.seats_material = seats_material
