// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList : ['Andrew' ,'Jen','Mike'],
    printGuestList(){
        
        console.log('guest list for' + this.name)
        this.guestList.forEach((guest) => { //function --> arrow fun 으로 바꾼다. 
            console.log(guest+' is attending '+this.name)
        })
        //arrow func binding 안함.
    }
}

event.printGuestList()