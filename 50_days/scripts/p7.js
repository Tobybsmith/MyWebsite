//buttons
const leftButton = document.getElementById("left")
const rightButton = document.getElementById("right")
//panes
const leftPane = document.querySelector(".left")
const rightPane = document.querySelector(".right")
leftButton.addEventListener('click', () => {
    console.log("Hello")
    removeDefaults();
    if(leftPane.classList.contains("inactive"))
    {
        leftPane.classList.remove("inactive")
        rightPane.classList.remove("active")
    }
    leftPane.classList.add("active")
    rightPane.classList.add("inactive")
})

rightButton.addEventListener('click', () => {
    removeDefaults();
    if(rightPane.classList.contains("inactive"))
    {
        rightPane.classList.remove("inactive")
        leftPane.classList.remove("active")
    }
    rightPane.classList.add("active")
    leftPane.classList.add("inactive")
})

function removeDefaults()
{
    leftPane.classList.remove("default")
    rightPane.classList.remove("default")
}