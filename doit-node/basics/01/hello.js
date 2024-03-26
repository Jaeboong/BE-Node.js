const c = require('ansi-colors');
console.log(c.red("Hello bro"));

function hello(name) {
  console.log(c.blue(name + " 님, 안녕하세요?"));
}

hello("홍길동");
