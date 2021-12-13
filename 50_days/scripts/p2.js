const nodes = document.querySelectorAll(".node");
const next = document.querySelector(".next");
const prev = document.getElementById("prev");
var id  = 1;

//remember to import the script in the HTML or nothing happens duh
next.addEventListener('click', () => {
    id++;
    if(id > 4)
    {
        id = 4;
    }
    update();
});



prev.addEventListener('click', () => {
    id--;
    if(id < 1)
    {
        id = 1;
    }
    update();
});

function update()
{
    nodes.forEach((node, idx) => {
        console.log(idx);
        console.log(id);
        //gets node from nodes and its index;
        if(idx < id)
        {
            node.classList.add("active");
        }
        else{
            node.classList.remove("active");
        }
    })
}