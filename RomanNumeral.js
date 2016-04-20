function convertToRoman(num) {
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var numeralList = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

    //If provided number argument doesn't match anything in the numbers array, add up to get to it
    if (numbers.indexOf(num) == -1) {
        console.log("Houston, we have a problem");
    }

    return num;
}

convertToRoman(2);
// => II
