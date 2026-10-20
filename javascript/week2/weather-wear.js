function whatToWear(temperature) {
  if (temperature < 0) {
    return "Winter jacket and warm clothes";
  } else if (temperature < 10) {
    return "Jacket and pants";
  } else if (temperature < 20) {
    return "sweater and pants";
  } else {
    return "T-shirt and shorts";
  }
}
const clothesToWear = whatToWear(18);
console.log(clothesToWear);
