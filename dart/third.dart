class Vehicle {
  String brand;
  int wheels;

  Vehicle(this.brand, this.wheels);

  void printVehicleInfo() {
    print("Brand: $brand");
    print("Wheels: $wheels");
  }
}

class Car extends Vehicle {
  String model;
  int speed;

  Car(String brand, this.model, this.speed)
      : super(brand, 4);

  void printCarInfo() {
    printVehicleInfo();
    print("Model: $model");
    print("Top Speed: $speed km/h");
  }
}

void main() {
  Car myCar = Car("Toyota", "Supra", 250);
  myCar.printCarInfo();
}