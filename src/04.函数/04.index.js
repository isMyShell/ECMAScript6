{
  function a(){
    console.log(arguments.length);

  }

  a(1,2)
}

{
  let x = 1
  function f(y=x) {
     let x = 2;
    console.log(y);
  }

  f()
}

{
  let x = 1
  function f(x) {
    var x = 2;
    console.log(x);
  }

  f()
}
//函数的扩展
{
  //1.函数参数的默认值
  //基本用法
    function foo(a,b = 2){
        console.log(a,b)
    }
    //报错 不可以重新定义参数
    function bar(a=2,b){
      //let a = 1
    }
    //报错  不可以有同名的参数
    // function baz(a, b ,b =1){
    //
    // }
}
