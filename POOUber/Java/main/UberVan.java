import java.util.ArrayList;
import java.util.Map;


class UberVan extends Car {
  Map<String, Map<String, Integer>> typeCarAccepted;
  ArrayList<String> seatsMaterial;

  public UberVan(String license, Account driver, Map<String, Map<String, Integer>> typeCarAccepted, ArrayList<String> seatsMaterial){
    super(license, driver);
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
  }

  /* polymorphism */
  @Override
  public void setPassenger(Integer passenger) {
    if (passenger == 6) {
      this.passenger = passenger;
    }else{
      System.out.println("You need minimum 6 seat available");
    }
}