//npm install crypto
const crypto = require('crypto');

const a = "lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1Jo";
const b = "zF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs"
const message= a+b;


//1st STEP

result1 = crypto.createHash("sha512").update(message).digest();
console.log("SHA512", result1 ,result1.length,  result1.toString('hex'));

var arr1 = [];
for (var resultss = 0; resultss<=6 ; resultss++) {
    arr1.push(result1[resultss]); 
}
console.log("new array==>", arr1);



//2nd STEP


result = crypto.createHash("sha512").update(message).digest().reverse();
console.log("SHA512", result ,result.length, result.toString('hex'));


var arr = [];
for (var results = 0; results<=5 ; results++) {
    arr.push(result[results]); 
}
console.log("new array==>", arr);
     
// //3rd STEP 

const list = [2, 94, 38, 112, 94, 198, 115, 139, 185, 55, 111, 57, 46, 44, 86, 143, 111, 186, 156, 99, 79, 49, 39, 182, 182, 217, 122, 138, 122, 58, 102, 110, 26, 197, 9, 21, 127, 235, 28, 101, 139, 164, 49, 119, 242, 53, 165, 44, 164, 228, 241, 104, 12, 224, 221, 213, 58, 96, 121, 207, 58, 209, 222, 60]
;
const middleIndex = Math.ceil(list.length / 2);

var firstHalf = list.splice(0, middleIndex);   
var secondHalf = list.splice(-middleIndex);

// console.log(firstHalf);  // [1, 2, 3]
// console.log(secondHalf); // [4, 5, 6]
// console.log(list); 
// console.log("first==>")

function swap (){
    var a = firstHalf;
    var b = secondHalf;
    firstHalf =  b;
    secondHalf = a ;
//     console.log(  "first half"  , firstHalf);  // [1, 2, 3]
// console.log("second half" , secondHalf); // [4, 5, 6]
}
function join( a , b){
  var third =  a.concat(b)
  console.log("Thirdresult " , third);

  var arr3 = [];
for (var results3 = 0; results3<=6 ; results3++) {
    arr3.push(third[results3]); 
}
console.log("new array==>", arr3);


var forthArray = third.reverse();
console.log("fortharray", forthArray);


var arr4 = [];
for (var results4 = 0; results4<=5 ; results4++) {
    arr4.push(forthArray[results4]); 
}

console.log("forth", arr4);
}

swap();
join( firstHalf , secondHalf);



