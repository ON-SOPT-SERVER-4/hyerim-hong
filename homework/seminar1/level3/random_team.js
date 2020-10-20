//가짜 서버파트 members.js를 이용하여 랜덤으로 조를 짜는 알고리즘

const rand_team = require('./members');
const members = rand_team.members;

const OB = members.filter( x => x.status === 'OB'); //OB
const YB = members.filter( x => x.status === 'YB'); //YB

OB.sort(function(){return Math.random() - Math.random()}); //OB 랜덤 정렬
YB.sort(function(){return Math.random() - Math.random()}); //YB 랜덤 정렬

