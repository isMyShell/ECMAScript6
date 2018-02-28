console.log('start')
//then 返回promise 中有then的链式调用 是等调用完成之后 返回最后一个then的返回值
//尽量不要这么使用 把内 部的then提出外层

//没有修改
// new Promise(resolve =>  {
//   setTimeout(() => {
//     console.log('step1')
//     resolve(100)
//   },1000)
// })
// .then(res => {
//   return new Promise(resolve => {
//     console.log('step1-1')
//     resolve(res)
//   })
//   .then(res => {
//     console.log('step1-2')
//     return res + 1
//   })
//   .then(res => {
//     console.log('step1-3')
//     return res + 1
//   })
// })
// .then(res => {
//   console.log('step2')
//   console.log(res)
// })
//修改之后
new Promise(resolve =>  {
  setTimeout(() => {
    console.log('step1')
    resolve(100)
  },1000)
})
.then(res => {
  return new Promise(resolve => {
    console.log('step1-1')
    resolve(res)
  })
})
.then(res => {
  console.log('step1-2')
  return res + 1
})
.then(res => {
  console.log('step1-3')
  return res + 1
})
.then(res => {
  console.log('step2')
  console.log(res)
})