const promise = new Promise((resolve, reject) =>{

    console.log('promise test');

})

const getNumber = new Promise(( resolve, reject) => {  //무조건 가지고있는 값? (총 1초)
    console.log("getNumber Pending")
    setTimeout(()=> {
        resolve(100);
    }, 1000)
})

getNumber               //위에 있는 resolve가 then을 통해 실행됨
.then(value => {
    console.log(value);
    return value * 2;
})
.then(value => {
    console.log(value);
    return value * 3;
})
.then(value => {
    return new Promise((resolve, reject) => {  //다시 Promise 만듦 (총 2초)
        setTimeout(() => {
            resolve(value + 1000);
        }, 1000)
    })
})
.then(value => console.log(value));