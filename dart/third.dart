loadData() async {
  // Simulate a delay to mimic data loading
  await Future.delayed(Duration(seconds: 2));
  return "Sample Data";
}

void main() async {
  print("Loading data...");
  String data = await loadData();
  print("Data loaded: $data");
}