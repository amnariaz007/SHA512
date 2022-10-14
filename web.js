const Web3 = require('web3')

const rpcURL = "https://goerli.infura.io/v3/07b0f2fe4e234ceea0ff428f0d25326e";
const web3 = new Web3(rpcURL);

const a = "lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1Jo";
const b = "zF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs"
const message = a + b;


// secret = web3.utils.toHex('lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1JozF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs');
// secret = padUntil32Bytes(secret)
// const result = await instance.SimpleHash.call(secret);
// console.log('function return',result);
// hash = SHA256(secret);
// console.log('hash outside the contract',hash.toString(CryptoJS.enc.Hex));

console.log(web3.utils.soliditySha3('lY2shc9UBZIR1l7aTJzbBdPYnhPKo8ZzGLFXnNzK1JozF79aSPECD80LCi7ytnDtleivHDwXN85JT591pa4yxs'));

console.log(web3.utils.hexToBytes('0x5beffa59d77b2482f61e5ea864e7d44171656033ff43cbca4695d3018be142e7'));

