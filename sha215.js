//npm install crypto
const crypto = require('crypto');

const a = "lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1Jo";
const b = "zF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs"
const message= a+b;


//2943811294198115
//SHA: Secure Hash Algoritm
//MD: Message Digest

// result = crypto.createHash("md5").update(message).digest();
// console.log("MD5", result ,result.length, result.toString('hex'));

// result = crypto.createHash("sha1").update(message).digest();
// console.log("SHA1", result ,result.length, result.toString('hex'));

// result = crypto.createHash("sha256").update(message).digest();
// console.log("SHA256", result ,result.length, result.toString('hex'));

result1 = crypto.createHash("sha512").update(message).digest();
console.log("SHA512", result1 ,result1.length,  result1.toString('hex'));

var arr1 = [];
for (var results = 0; results<=6 ; results++) {
    arr1.push(result1[results]); 
}
console.log("new array==>", arr1);


                                //***************************//

                                
result = crypto.createHash("sha512").update(message).digest().reverse();
console.log("SHA512", result ,result.length, result.toString('hex'));


var arr = [];
for (var results = 0; results<=5 ; results++) {
    arr.push(result[results]); 
}
var c = arr[0];
console.log("new array==>", arr);
     


