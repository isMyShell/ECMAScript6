
console.log('start')

new Promise(resolve => {
  setTimeout(() => {
    resolve('hello')
  },1000)
})
.then(res => {
  console.log(res);
  (() => {
    setTimeout(() => {
      return new Promise(resolve => {
        console.log('Mr liu ！')
        resolve('hi man')
      })
    }, 2000)
  })()
  return false
}, err => {
  console.log(err)
})
.then(res => {
  console.log(res + ' world !')
})