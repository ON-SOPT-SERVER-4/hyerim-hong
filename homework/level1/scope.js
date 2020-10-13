if(true){
    var x = 'var';
}
console.log(`var: ${x}`); //functionScope

if(true){
    let y = 'let';
}
console.log(`let: ${y}`); //blockScope: block내에 선언된 값은 밖에서 접근 불가


function colorFunction(){
    if(true){
        var color = 'blue';
        console.log(color);
    }
    console.log(color);
}
colorFunction();
console.log(color); //functionScope의 범위 벗어나면 접근불가

hoistFunction();
function hoistFunction(){
    console.log(x); //undefined
    var x  = 'var';
    console.log(x); //var
}