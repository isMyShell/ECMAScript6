console.log('start')

let p1 = new Promise( resolve => {
  setTimeout(() => {
    resolve('p1')
  },10000)
})

let p2 = new Promise( resolve => {
  setTimeout(() => {
    resolve('p2')
  },8000)
})

let p3 = new Promise( resolve => {
  setTimeout(() => {
    resolve('网络超时了!')
  },5000)
})

Promise.race([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })