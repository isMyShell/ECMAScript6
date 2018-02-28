console.log('start')

const promise = new Promise(resolve => {
  setTimeout( () => {
    console.log('promise finished')
    resolve('hello')
  },1000)
})

setTimeout(() => {
  promise.then(res => {
    console.log(res + ' world !')
  })
},3000)