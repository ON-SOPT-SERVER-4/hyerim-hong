const crypto = require('crypto');

const pw = '123123';
const pw2 = '12312';
const base64 = crypto.createHash('sha512').update(pw).digest('base64');
const base64_ = crypto.createHash('sha512').update(pw2).digest('base64');
const hex = crypto.createHash('sha512').update(pw).digest('hex');

console.log(base64);
console.log(base64_);
console.log(hex);