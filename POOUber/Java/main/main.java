class Main{
  public static void main(String[] args) {
    Car car = new Car("HGB243", new Account("Juanito Escarcha", "1236789"));
    car.passenger = 4;
    car.printDataCar();
  }
}