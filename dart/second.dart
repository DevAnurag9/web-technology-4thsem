import 'dart:io';

class Employee {
  String name;
  double basicSalary;

  Employee(this.name, this.basicSalary);
}


class Manager extends Employee {
  Manager(String name, double basicSalary) : super(name, basicSalary);

  double get hra => 0.20 * basicSalary; 
  double get da  => 0.10 * basicSalary; 

  double totalSalary() {
    return basicSalary + hra + da;
  }
}

void main() {
  stdout.write("Enter manager name: ");
  String name = stdin.readLineSync()!;

  stdout.write("Enter basic salary: ");
  double basic = double.parse(stdin.readLineSync()!);

  Manager m = Manager(name, basic);

  print("\n--- Salary Details ---");
  print("Name: ${m.name}");
  print("Basic Salary: ${m.basicSalary}");
  print("HRA (20%): ${m.hra}");
  print("DA (10%): ${m.da}");
  print("Total Salary: ${m.totalSalary()}");
}
