console.log('start')
//最好使用catch的方式
new Promise(resolve => {
  setTimeout(() => {
    throw new Error('bey')
    resolve('ok')
  },1000)
})
.then(res => {//不会执行
  console.log(res)
})
.catch(err => {
  console.log(err)
})

// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject('err')
//   },1000)
// })
// .then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

