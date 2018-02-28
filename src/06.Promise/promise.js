console.log('here we go!')
new Promise( resolve => {
  setTimeout(() => {
    resolve('hello')
  }, 2000)
})
.then(res => {
  console.log(res + ' world !')
  return new Promise( resolve => {
    setTimeout(() => {
      resolve('hi')
    },2000)
    
  })
})
.then(res => {
  console.log(res + ' world !')
})

