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
// call stack 이 last in first out 이라서 그렇다고 함.
// node api 에 들어간다. -> callback queue로 들어간다.
// callback 큐는 call stack이 비워진 후에야 call stack으로 간다. 
// 이벤트loop는 call stack 이 비워지기 전까진 Asynchronous callback 을 할수없다. 