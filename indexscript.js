document.addEventListener('DOMContentLoaded',function(){
    // Once the dom content is loaded remove the loader wrapper and put the loading video top left to merge with incoming logo.
    setTimeout(function(){
        document.querySelector('.loader-wrapper').classList.add('fade');
        document.querySelector('#loading-video').classList.add('top-left-exit');
        
    }, 2000)
    setTimeout(function(){
        // Bring in the waves
        document.querySelector('.content').classList.add('into-middle');
    }, 2000)
    // Set the video to autoplay only once the transition is over
    setTimeout(function(){
        const video = document.querySelector('#logo-video').play();
        // Remove the loading div completely
        document.querySelector('.loader-wrapper').style.display = "none";
        
    }, 1000)
   
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
    makeLinkActive();
})

function toggleMenu(event){
    target = event.target
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