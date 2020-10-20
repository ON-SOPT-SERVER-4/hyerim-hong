//함수선언식
function add(x, y){
    return x + y;
}
console.log(add(2, 3));

//함수표현식
var addStr = function(x, y){
    return x + y;
}
console.log(addStr("안녕", "하세요"));

//화살표 함수표현식
var add = (x, y) =>{
    return x + y;
}
console.log(add(2, 3));

//한줄일때 return 생략가능
var add = function(x, y){
    return x + y;
}
var add = (x, y) => x + y;
var add = (x, y) => (x + y);

//매개변수 하나일때 소괄호 생략가능
var square = function(x){
    return x * x;
}

var square = x => x * x;

//소괄호로 감싸줘야함
var person = function(name, age){
    return{
        name: name,
        age: age,
    };
}
var person = (name, age) => ({name: name, age: age});