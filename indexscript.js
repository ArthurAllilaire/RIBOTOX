document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
})

function toggleMenu(event){
    target = event.target
    console.log(target)
    //Check to make sure div not i was selected
    if (target.classList.contains("menu-toggle") == false){
        target = target.parentNode
    }
    // Get the ul of links
    links = target.parentNode.childNodes[3]
    if (target.classList.contains("open")){
        target.classList.remove('open')
        //change display of menu
        links.classList.remove('mobile-links')
        links.classList.add('links')
    } else{
        target.classList.add('open')
        // Change display of menu
        links.classList.add('mobile-links')
        links.classList.remove('links')
    }
}