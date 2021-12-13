const elements = document.querySelectorAll('.element')

window.onscroll = function(){
    elements.forEach((element)  => {
        if(element.classList.contains('hidden') && element.getBoundingClientRect().top < window.innerHeight/2 )
        {
            element.classList.remove('hidden')
            element.classList.add('shown')
        }
    })}