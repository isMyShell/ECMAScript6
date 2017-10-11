{
  //includes
  let foo = 'hello world!'
  let a = foo.includes('hell')
  console.log(a);
}

{
  //startWith
  let foo = 'hello world!'
  let a = foo.startsWith('hell')
  console.log(a);
}

{
  //endsWith
  let foo = 'hello world!'
  let a = foo.endsWith('!')
  console.log(a);
}

{
  //repeat()
  let a = 'x'.repeat(2)
  console.log(a);
}

{
  //padStart()
  let a='m'.padStart(5,'yyy')
  console.log(a);

  let c='m'.padStart(10)
  console.log(c);

  //padEnd ()
  let b='m'.padEnd(5,'yyy')
  console.log(b);
}

{
  //字符串模板
  function foo(){
    console.log('hello world')
  }
  let a = 1
  console.log(`aaa${a}`);
  //字符串{}中执行的是javascript代码  所以可以执行函数
  `bbb${foo()}`
}

{
  //模板
  //<% %>
  //<%＝ %>
}

{
  //标签模板
  // alert('aa')
  // alert`bb`
}
