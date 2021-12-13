//makes an array of all the items in the document with class "image".
const panels = document.querySelectorAll('.image')

//(stuff to do stuff to) => {stuff to do to each}
panels.forEach((image) => {
    //on click, do stuff to (image)
    image.addEventListener('click', () => {
        //remove all active classes
        removeActive();
        //add to the target of the click
        image.classList.add('active');
    })
})

function removeActive()
{
    //iterate through all panels and remove "active" class
    panels.forEach((image) => {
        image.classList.remove('active')
    })
}