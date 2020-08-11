// Search the button
document.querySelector('#add-time')
// When click on the button
.addEventListener("click", cloneField)

// Execute an action
function cloneField() {
    // Duplicate the field
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Get the fields
    const fields = newFieldContainer.querySelectorAll('input')

    // Clear each field
    fields.forEach(function(field) {
        field.value = ''
    })

    // Put on the page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}