function sumAll(arr) {
    //Determine which value is lower and which is higher
    var lowerNumber = Math.min(arr[0], arr[1]);
    var higherNumber = Math.max(arr[0], arr[1]);
    var total = 0;

    //Reduce the array to a single value
    for (var i = lowerNumber; i <= higherNumber; i++) {
        total += i;
    }
  return total;
}
sumAll([1, 4]);
//=> 10
