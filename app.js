function argumen(value) {
    var value2 = typeof value;
    console.log(`тип данных: ${value2}`)
}
argumen(69)


function backString(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

var originalString = prompt('напиши любое слово');
var reversedString = backString(originalString);
console.log(reversedString);

