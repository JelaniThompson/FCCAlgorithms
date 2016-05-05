function convertToRoman(num) {
    //Convert given number into a roman numeral
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var numeralList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var roman = '';
    var remaining = num;

    for (var index = 0; index < numbers.length; index++) {
        while (numbers[index] <= remaining) {
            roman += numeralList[index];
            remaining -= numbers[index];
        }
    }
    console.log(roman);
}


convertToRoman(11);
// => XI
