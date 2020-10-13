//배열 선언
var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['홍혜림', 1, 2, 3, null, {name: 'hr', age: 23}];
console.log(arr3);
console.log(typeof arr3);

//array prototype method
console.log('*** Array 기본 함수들을 알아보자 ***');
var arr = [1, 2, 3, 4];

console.log(`arr의 길이: ${arr.length}`);

arr.push('new item');
console.log('arr push:', arr);
arr.pop();
console.log('arr pop: ', arr);

arr.unshift('first item');
console.log('arr unshift:', arr);
arr.shift();
console.log('arr shift:', arr);

console.log('arr.includes(4):', arr.includes(4));
console.log('arr.includes(1000):', arr.includes(1000));

console.log('arr.indexOf(4):', arr.indexOf(4));
console.log('arr.indexOf(100):', arr.indexOf(100));

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2):', concatArr);

var location = ["서울", "대전", "대구", "부산"];
console.log(location.join('-> '));

console.log(location.reverse().join('-> '));

var countries = ['Seoul', 'Andorra', 'Vietnam'];
console.log(countries.sort( (a, b) => a > b ? 1: -1));
console.log('오름차순 정렬: ', concatArr.sort((a, b) => a - b));
console.log('내림차순 정렬:', concatArr.sort(function(a,b) {return b - a}));

var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이진호"];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. ';
let serverPartMemberStr = '서버파트 여러분 이름 한번씩만 불러주세요~ ';

for(let item in serverPart){
    serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for(let item of serverPart){
    serverPartMemberStr += item + '! ';
}