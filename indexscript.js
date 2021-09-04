document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
})

function toggleMenu(event){
    target = event.target
    //Check to make sure div not i was selected
    if (target.classList.contains("menu-toggle") == false){
        target = target.parentNode
    }
    if (target.classList.contains("open")){
        target.classList.remove('open')
    } else{
        target.classList.add('open')
    }
}