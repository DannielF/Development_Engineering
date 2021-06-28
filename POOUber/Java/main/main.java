class Main{
  public static void main(String[] args) {
    UberX uberX = new UberX("HDP888", new Account("Benito Camelas", "44556677"), "Toyota", "Corolla");
    uberX.setPassenger(4);
    uberX.printDataCar();

/*     UberVan uberVan = new UberVan("AJI555", new Account("Zacate Lashue", "5674321"));
    uberVan.setPassenger(6);
    uberVan.printDataCar(); */

    /* Car car = new Car("HGB243", new Account("Juanito Escarcha", "1236789"));
    car.passenger = 4;
    car.printDataCar();*/
  }
}