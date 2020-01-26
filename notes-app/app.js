const chalk = require('chalk')
const yargs = require('yargs')
const command = process.argv[2]
const notes = require('./notes.js')

//console.log(process.argv)

//Customize yargs ver
yargs.version('1.1.0')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : { //command 의 옵션 추가한다. 
        title : {
            describe : 'Note title' , 
            demandOption : true, // title 반드시 필요로함. 안쓰면 오류
            type : 'string' //requried 되는게 string이여야 함. 
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        // //console.log('Adding a new note!', argv)
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+ argv.body)
        notes.addNote(argv.title, argv.body)
        
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder: {
        title:{
            describe : "Note title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        // console.log('Removing the note!')
        notes.removeNote(argv.title)
    }
})


//Create List command

yargs.command({
    command : 'list',
    describe : 'List your notes',
    handler(){
        console.log('Listing out all notes')
    }
})


//Create List command

yargs.command({
    command : 'read',
    describe : 'Read a notes',
    handler(){
        console.log('Reading a note')
    }
})

yargs.parse() //parsing the argument
//console.log(yargs.argv)
//_ , $ , add / title = string value 로 알려줌.
