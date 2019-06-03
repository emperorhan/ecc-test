const ecc = require ('eosjs-ecc');

const privKey='5JKhxJtCUteG8LRqA6pxCH45oddMY4SnYvnLd9mxntS2uCASgFc';

const text = '0';
const data = ecc.sha256(text)
const sig = ecc.sign(data, privKey);

console.log( privKey );
console.log( text );
console.log( data );
console.log( sig );