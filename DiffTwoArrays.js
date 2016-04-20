//Return the symetric differences of the two arrays
function diffArray(arr1, arr2) {
    var newArr = [];

    //If the index of the array doesn't match, put it into a new array
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
            console.log(newArr);
        }
    }

    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) == -1) {
            newArr.push(arr2[j]);
            console.log(newArr);
        }
    }

    // Same, same; but different.
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// => 4

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// => Pink Wool
