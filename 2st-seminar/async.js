// 중->고->대
const 자퇴 = false;

const middleSchool = () => new Promise((resolve, reject) => { //중학교 값을 담음
    setTimeout(() => {
        resolve(`중학교`);
    }, 1000)
});

const highSchool = school => new Promise((resolve, reject) => { //전 값을 고등학교에 담은후 다시 resolve
    if (자퇴) {
        setTimeout(() => {
            reject(new Error('에러!'));
        }, 1000)
    } else {
        setTimeout(() => {
            resolve(`${school} => 고등학교`);
        }, 1000)
    }
})

const univ = school => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`${school} => 대학교`);
    }, 1000)
})

async function func1(){
    try{
    //1. async 함수에서 사용해야함 2. promise를 가지는 객체에 대해서만 반환할 수있음
    const middle = await middleSchool();
    const high = await highSchool(middle);
    const university = await univ(high);
    console.log(university);
    }catch(console){
        console.error(error);
    }finally {
        console.log('무조건 실행');
    }
}//동기적으로 보이게 해주는 것이 async, await!

/* 
middleSchool()
    .then(school => highSchool(school))
    .catch(err =>{
        return `검정고시`;
    })
    .then(school => univ(school))
    .then(result => console.log(result))
    .then(error => console.error(error));
*/

    func1();