import 'dart:io';

// function
int add(int a, int b) {
  return a + b;
}

void main() {
  // input
  stdout.write("Enter first number: ");
  int a = int.parse(stdin.readLineSync()!);

  stdout.write("Enter second number: ");
  int b = int.parse(stdin.readLineSync()!);

  // function call
  int result = add(a, b);

  // output
  print("Sum = $result");
}
