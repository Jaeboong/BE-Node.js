// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)

const path = require("path");

//join 함수

const fullPath = path.join('some', 'work', 'ex. txt');
console.log(fullPath);

// 경로만 추출 - dirname

const dir = path.dirname(fullPath);
console.log(dir);

// file name 추출

const fn1 = path.basename(__filename);
console.log(`전체 경로(__filename): ${__filename}`);
console.log(fn1);

// 확장자 제거된 이름

const fn2 = path.basename(__filename, '.js');
console.log(fn2);
