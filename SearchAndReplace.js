function myReplace(str, before, after) {
    var stringArray = str.split(' ');
    //Preserve casing
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        after.charAt(0).toUpperCase() + after.slice(1);
    }

    //Find item in string that matches before
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === before) {
            stringArray[i] = after;
            //Turn array into sentence with join
            var sentence = stringArray.join(' ');
            str = sentence;
            console.log(str);
            console.log(after);
        }
    }
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
