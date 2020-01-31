const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes()
    //title 중복일 경우 
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title 
    // })
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // console.log(duplicateNote) //중복인지 아닌지 알아볼때 ?? debugging
    // console.log(title)

    debugger 
    //실행방법 : node --inspect-brk ~~ 쓴다. 
    //chrome://inspect/#devices 여기서 확인 가능. 

    if ( !duplicateNote){
        //empty일 경우 생성
        notes.push({
            title : title,
            body : body
        })
        //console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Notes title taken!'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    // const notesTokeep = notes.filter(function(note){
    //     return note.title !== title //note title 일치하는 note가 존재 안하는 경우
    // })
    const notesTokeep = notes.filter((note) => note.title !== title)
    
    if(notes.length > notesTokeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesTokeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON) 
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e){
        return [] //overriding 안함/// empty data return 한다. 
    }


}

//module.exports = getNotes 
//여러개 하려면 ?
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote : readNote
}