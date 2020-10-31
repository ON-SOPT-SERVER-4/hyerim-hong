//express의 router()객체를 router변수에 할당
var express = require('express');
var router = express.Router();

//각 라우터들을 router와 연결해줌
router.use('/users', require('./users'));
router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));

//express 초기 설정코드, 지워도 상관없음
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//위에 세팅한 라우터들을 router객체에 담아서 exports
//exports 된 객체는 app.js에서 미들웨어로 등록
module.exports = router;
