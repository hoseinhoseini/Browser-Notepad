
// Variables
let noteList = document.querySelector('.note-list')


// Event Listeners
eventListener()
function eventListener() {
    // Submit Btn
    document.querySelector('#form').addEventListener('submit', newNote)

    // Remove Btn
    document.querySelector('.note-list').addEventListener('click', removeNote)

    // On Loaded Functoin
    document.addEventListener('DOMContentLoaded', localStorageOnLoaded)
}



// Functions

// Add Note Function
function newNote(e) {

    e.preventDefault()

    // Select Textarea Value
    let note = document.querySelector('#note-box').value
    document.querySelector('#note-box').value = ''

    // Creat <li> Tag
    let li = document.createElement('li')
    li.textContent = note
    
    // Create Remove Element
    let removeBtn = document.createElement('a')
    removeBtn.textContent = 'X'
    removeBtn.classList = 'remove-note'

    // Add removeBtn to <li>
    li.appendChild(removeBtn)

    // Add <li> TO note-list
    noteList.appendChild(li)

    // Add Note to Local Storage
    addNoteToLocalStorage(note)

    // Alert Note Added
    alert('یادداشت با موفقیت اضافه شد!')
}

// Remove Note Function
function removeNote(e) {
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove()
    }

    // Also Remove From Local Storage
    let liContetn = e.target.parentElement.textContent
    removeNoteLocalStorage(liContetn)

}

// Add To localStorage Function
function addNoteToLocalStorage(note) {

    // Add Local Storage Value to Notes
    const notes = getNoteFromLocalStorage();

    // Add new Note to Notes
    notes.push(note)

    // Set Item in Local Storage
    localStorage.setItem('notes', JSON.stringify(notes))

}

// Get Note From Local Storage
function getNoteFromLocalStorage() {

    // Define Variables
    let notes;
    
    // Check Item From Local Storage
    let getFromLS = localStorage.getItem('notes');
    if (getFromLS === null) {
        notes = []

    } else {
        notes = JSON.parse(getFromLS)
    }

    return notes
}

// On Loaded Function
function localStorageOnLoaded() {

    const notes = getNoteFromLocalStorage()

    notes.forEach(function(note) {
        // Creat <li> Tag
        let li = document.createElement('li')
        li.textContent = note
        
        // Create Remove Element
        let removeBtn = document.createElement('a')
        removeBtn.textContent = 'X'
        removeBtn.classList = 'remove-note'

        // Add removeBtn to <li>
        li.appendChild(removeBtn)

        // Add <li> TO note-list
        noteList.appendChild(li)
    });
}

// Remove Frome Local Storage
function removeNoteLocalStorage(noteContent) {

    // Remove X From Note
    const noteDeleted = noteContent.substring(0, noteContent.length - 1)
    
    // Get Note From local Storage
    let noteFromLS = getNoteFromLocalStorage()

    noteFromLS.forEach(function(note, index) {
        
        if (note === noteDeleted) {
            noteFromLS.splice(index, 1)
        }
    });

    localStorage.setItem('notes', JSON.stringify(noteFromLS))
}