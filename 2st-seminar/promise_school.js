//중->고->대
const 자퇴 = true;

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

middleSchool()
    .then(school => highSchool(school))
    .catch(err =>{
        return `검정고시`;
    })
    .then(school => univ(school))
    .then(result => console.log(result))
    .then(error => console.error(error));