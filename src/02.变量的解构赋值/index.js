
//01 数组的解构赋值
//结构不成功就会undefiend
{
  let [foo, bar] = [1]
  //foo 1
  //bar undefiend


}
{
  //不完全解构
  let [x, y] = [1, 2, 3];
  // x  1
  // y  2
}

{
  //默认值
  let [x,y=2] = ['a', undefined]
  //x a
  //y 2

  let [m,n=2] = ['a','b']

  let [q,t=1] = ['a',undefined]
  //在es6中使用的是严格的 === ；所以t的值为1不是undefined
  //但是如果
  let [e,r] = ['q', null]
  //r null 因为null 不严格等于undefined
  //null == undefined //true
  //null === undefined //false
}

{
  function f(){
    console.log('aaa')
  }
  let [a,b = f()] = ['a','b']
  //惰性的赋值 右边的数组已经有b的值，就不会使用b的默认值了，实际上f()是没有执行的
}





//02对象的解构赋值

{
  let {bar, foo, baz} = {foo:'q', bar:'d'}

  let {m:x , n , q} = {m:'a', n:'dd'}
  //x a
  //n dd
  //q undefined

  var {x = 3} = {x: null};
  //x  null
}

//03 字符串的解构赋值
{
  let [a, b, c, d] = 'hello'

  //a h
  //b w
  //c l
  //d l

  let {length:len} = 'hello'
  //len 5
}



//04布尔值 数字的解构赋值



//05 函数参数的解构赋值



//用途
//1 交换变量
//2 获取json数据
//3 函数返回多个值
//4 函数参数自定义 默认值
//5 输入模块的指定方法

// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
//
// const { SourceMapConsumer, SourceNode } = require("source-map");
