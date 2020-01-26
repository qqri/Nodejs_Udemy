//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){

        // this.tasks.forEach((task) => {
        //     if(!task.completed){ 
        //         console.log(task.text+' is todo ')
        //     }
        // })
        return this.tasks.filter((task)=>task.completed === false)

    }
}

console.log(tasks.getTasksToDo())