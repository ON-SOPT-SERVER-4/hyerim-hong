if(true){
    var x = 'var';
}
console.log(`var: ${x}`);

/* if(true){
    let y = 'let';
}
console.log(`let: ${y}`); //y is not defined */

function colorFunction(){
    if(true){
        var color = 'blue';
        console.log(color); //blue
    }
    console.log(color); //blue
}
colorFunction();
console.log(color); //color is not defined