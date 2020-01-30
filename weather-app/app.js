setTimeout(() => {
    console.log('0 second timer')
}, 0)

console.log('Starting')

setTimeout( () => {
    console.log('2 second timer')
},2000 )
//setTimeout = run some code after 
//a specifi amount of time



console.log('Stopping')

// 결과 : starting -> stopping -> 0 -> 2