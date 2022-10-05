//npm install crypto
const crypto = require('crypto');

const a = "lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1Jo";
const b = "zF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs"
const message = a + b;


//1st STEP

result1 = crypto.createHash("sha512").update(message).digest();
console.log("SHA512", result1, result1.length, result1.toString('hex'));

var join1 = result1.join('');
var digit1 = join1.slice(0, 16);
console.log("first16 ", digit1);


//2nd STEP


result2 = crypto.createHash("sha512").update(message).digest().reverse();
console.log("SHA512", result2, result2.length, result2.toString('hex'));

var join2 = result2.join('');
var digit2 = join2.slice(0, 16);
console.log("first16 ", digit2);



//3rd STEP AND FORTH STEP

const list = [2, 94, 38, 112, 94, 198, 115, 139, 185, 55, 111, 57, 46, 44, 86, 143, 111, 186, 156, 99, 79, 49, 39, 182, 182, 217, 122, 138, 122, 58, 102, 110, 26, 197, 9, 21, 127, 235, 28, 101, 139, 164, 49, 119, 242, 53, 165, 44, 164, 228, 241, 104, 12, 224, 221, 213, 58, 96, 121, 207, 58, 209, 222, 60]
    ;
const middleIndex = Math.ceil(list.length / 2);

var firstHalf = list.splice(0, middleIndex);
var secondHalf = list.splice(-middleIndex);


function swap() {
    var a = firstHalf;
    var b = secondHalf;
    firstHalf = b;
    secondHalf = a;

}

function join(a, b) {
    var third = a.concat(b)
    console.log("Thirdresult ", third);


    var join3 = third.join('');
    var digit3 = join3.slice(0, 16);
    console.log("first16 ", digit3);


    var forthArray = third.reverse();
    console.log("fortharray", forthArray);


    var join4 = forthArray.join('');
    var digit4 = join4.slice(0, 16);
    console.log("first16 ", digit4);

}

swap();
join(firstHalf, secondHalf);
