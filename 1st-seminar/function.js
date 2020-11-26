//함수 선언식
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));

//함수 표현식
var addStr = function(x, y) {
    return x + y;
}
console.log(addStr("안녕", "하세요"));

//화살표 함수 표현식
var add = (x, y) => {
    return x + y;
}
console.log(add(2, 3));

//화살표 함수
var add = function(x, y) {
    return x + y;
}
var add = (x, y) => x + y;
var add = (x, y) => (X + y);

var square = function(x) {
    return x * x;
}
var square = x => x * x;

var person = function(name, age) {
    return {
        name: name,
        age: age,
    };
}

var person = (name, age) => ({name: name, age: age});