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
