//fs모듈을 이용하여 비동기적으로 비밀번호 암호화하기
//암호화된 문자열 -> 파일에 write

const crypto = require('crypto');
const fs = require('fs');

const pw = 'pwphaha';

const encrypt = (pw) => {
    crypto.randomBytes(64, (err, buf) => {
        const salt = buf.toString('base64');
        crypto.pbkdf2(pw, salt, 100000, 64, 'sha512', (err, key) => {
            console.log(`password: ${key.toString('base64')}`);
        });
    })

    encrypt(pw).then((data) => {
        fs.writeFile(writePassword, () => {
            console.log(`file[${fileName}] write complete`);
        });
    })
}