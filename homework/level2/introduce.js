const introduce = require('./members');
const members = introduce.members;

const showMember = (members) =>{
    console.log("** 서버파트 4조 팀원 소개하기 **\n");
    members.forEach( members => {
        const{ name, address, age, hobby } = members;
        console.log(`이름: ${name}\n거주지: ${address}\n나이: ${age}\n취미: ${hobby}\n\n`);
    })
};
showMember(members);