document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
    makeLinkActive();
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
        target.classList.remove('open');
        //change display of menu
        links.classList.remove('mobile-links');
        links.classList.add('links');
    } else{
        target.classList.add('open');
        // Change display of menu
        links.classList.add('mobile-links');
        links.classList.remove('links');
    }
};

function makeLinkActive(){
    console.log(window.location.pathname);
    // Get all the links
    links = document.querySelectorAll('.nav-link')
    for (let i = 0; i < links.length; i++){
        currentLink = links[i]
        if(window.location.pathname.includes(currentLink.getAttribute("href"))){
            currentLink.classList.add('active-link')
            console.log('ran')
        }
        console.log(links[i])
        // if(links[i])
        // links[i].classList.
    }
}