class Stundent3 {
  constructor(name){
    this.name = name;
    this.hi = this.hi.bind(this)
  }
  //这个语法在测试阶段
  // handleClick = () => {
  //   console.log('handleClick')
  // }
  hi(){
    console.log('hi')
  }
  sayName(){
    console.log(this.name)
  }
}

let my = new Stundent3('my')

console.log(my)
