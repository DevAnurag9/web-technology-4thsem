import 'dart:io';

// Base class
class Employee {
  String name;
  double basicSalary;

  Employee(this.name, this.basicSalary);
}

// Derived class
class Manager extends Employee {
  Manager(String name, double basicSalary) : super(name, basicSalary);

  double get hra => 0.20 * basicSalary; // 20% HRA
  double get da  => 0.10 * basicSalary; // 10% DA

  double totalSalary() {
    return basicSalary + hra + da;
  }
}

void main() {
  // Input
  stdout.write("Enter manager name: ");
  String name = stdin.readLineSync()!;

  stdout.write("Enter basic salary: ");
  double basic = double.parse(stdin.readLineSync()!);

  // Object creation
  Manager m = Manager(name, basic);

  // Output
  print("\n--- Salary Details ---");
  print("Name: ${m.name}");
  print("Basic Salary: ${m.basicSalary}");
  print("HRA (20%): ${m.hra}");
  print("DA (10%): ${m.da}");
  print("Total Salary: ${m.totalSalary()}");
}
