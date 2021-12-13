const button = document.getElementById("search");
const searchbar = document.getElementById("bar");

button.addEventListener('click', () => {
    if(searchbar.classList.contains("hidden"))
    {
        searchbar.classList.remove("hidden");
        searchbar.classList.add("show");
    }
    else{
        searchbar.classList.add("hidden");
        searchbar.classList.remove("show");
    }
})