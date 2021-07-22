// Variables
let noteList = document.querySelector('.note-list')


// Event Listeners
eventListener()
function eventListener() {
    // Submit Btn
    document.querySelector('#form').addEventListener('submit', newNote)

    // Remove Btn
    document.querySelector('.note-list').addEventListener('click', removeNote)
}



// Functions
function newNote(e) {
    e.preventDefault()
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
}
function removeNote(e) {
    if (e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove()
    }
}