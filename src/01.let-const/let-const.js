//1.let 定义的变量 不存在变量提升

console.log(foo1);
var foo1 = 1

console.log(foo2) //会报错
let foo2 = 2
//babel 编译后会变成下面es5的语法  所以在webpack编译不会报错
// console.log(foo1);
// var foo1 = 1;
//
// console.log(foo2);
// var foo2 = 2;

//2.es5只有全局作用域和函数作用域  没有块作用域

//const 声明时必须赋值 const a = 1  指向的指针不会改变（如果是复合的数据结构）

{

  const foo = Object.freeze({});

  // 常规模式时，下面一行不起作用；
  // 严格模式时，该行会报错
  //foo.prop = 123;
}


{
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
}
