const member = require('./members');

function quiz(callback, timeout) {
    setTimeout(callback, timeout);
}

function getFemale(members) {
    return new Promise(function (resolve, reject) {
        quiz(() => {
            const members = member.filter(mem => mem.gender === "여")
            resolve(members);
        }, 500)
    });
}

function getYB(members) {
    return new Promise(function (resolve, reject) {
        quiz(() => {
            const members = member.filter(mem => mem.status === "YB")
            resolve(members);
        }, 500)
    });
}

function getiOS(members) {
    return new Promise(function (resolve, reject) {
        quiz(() => {
            const members = member.filter(mem => mem.part === "iOS")
            resolve(members);
        }, 500)
    });
}

getFemale(member)
    .then(member => getYB(member))
    .then(member => getiOS(member))
    .then(member => console.log(member));