const s1 = Symbol('id'); //고유함
const s2 = Symbol('id');

console.log(s1.description);
console.log(s1 === s2);

console.log('-----------------');

const includes = Symbol('커스텀 includes 함수');

Array.prototype[includes] = function() {
    return 'it\s Symbol';
}

var arr = [1, 2, 3];
console.log(arr.includes(1));
console.log(arr['includes'](1));
console.log(arr[includes]());