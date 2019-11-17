export default function randomKey() {
  var allRandomsKey = []
  let randomKey = Math.ceil(Math.random()*50000)
  if( !(allRandomsKey.includes(randomKey)) ) {
    allRandomsKey.push(randomKey)
    return randomKey
  } else {
    while(allRandomsKey.includes(randomKey)) {
      randomKey = Math.ceil(Math.random()*10000)
      if( !(allRandomsKey.includes(randomKey)) ) {
        allRandomsKey.push(randomKey)
        return randomKey
      }
    }
  }
}