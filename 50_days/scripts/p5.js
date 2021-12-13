const bkg = document.getElementById("bkg");
const percent = document.getElementById("loadText")
//on load, start unbluring
bkg.classList.add("clear")
var load = 0;
//will 
let int = setInterval(count, 25);

function count()
{
    load++;
    if(load > 99)
    {
        //stops the interval at 100.
        clearInterval(int)
    }
    percent.innerText = `${load}%`;
    percent.style.opacity = 1 - load/100;
}