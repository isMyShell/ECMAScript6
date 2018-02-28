console.log('start')

Promise.all([1, 2, 3])
.then(all => {
  console.log('1: ' + all)
  let p1 = new Promise( reslove => {
    setTimeout( () => {
      reslove('p1')
    },1000)
  })
  let p2 = new Promise( reslove => {
    setTimeout( () => {
      reslove('p2')
    },3000)
  })
  return Promise.all(['xxoo', p1, p2])
})
.then(all => {
  console.log('2: ' + all)
  let p1 = new Promise( reslove => {
    setTimeout( () => {
      throw new Error('p1 err')
    },1000)
  })
  let p2 = new Promise( reslove => {
    setTimeout( () => {
      throw new Error('p2 err')
    },1000)
  })
  return Promise.all([p1, p2])
})
.then(all => {
  console.log('3: ' + all)
})
.catch(err => {
  console.log(err)
})