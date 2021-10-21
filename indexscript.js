document.addEventListener('DOMContentLoaded',function(){
    // Once the dom content is loaded remove the loader wrapper and put the loading video top left to merge with incoming logo.
    setTimeout(function(){
        document.querySelector('.loader-wrapper').classList.add('fade');
        document.querySelector('#loading-video').classList.add('top-left-exit');
        
    }, 2000)
    setTimeout(function(){
        // Bring in the waves
        document.querySelector('.intro-content').classList.add('into-middle');
    }, 2000)
    // Set the video to autoplay only once the transition is over
    setTimeout(function(){
        const video = document.querySelector('#logo-video').play();
        // Remove the loading div completely
        // document.querySelector('.loader-wrapper').style.display = "none";
        
    }, 2800)
    setTimeout(function(){
        // Remove the loading div completely
        document.querySelector('.loader-wrapper').style.display = "none";
        
    }, 3000)
   
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu)
    makeLinkActive();
})

// Add box shadow once the header passes 200px;
window.onscroll = function() {
    if(window.pageYOffset > 100){
        console.log(window.pageYOffset)
        document.querySelector('header').style.boxShadow= "0px 5px 25px -10px rgb(117, 115, 148)";
        // document.getElementById('#header').style.boxShadow = "0px 5px 25px -10px rgb(117, 115, 148)";
    } else{
        document.querySelector('header').style.boxShadow= "";
    }
}

function toggleMenu(event){
    target = event.target
    //Check to make sure div not i was selected
    if (target.classList.contains("menu-toggle") == false){
        target = target.parentNode
    }
    // Get the ul of links
    links = document.querySelector('#mobile-nav-cont')
    console.log(target, links)
    if (target.classList.contains("open")){
        // change the menu toggle
        target.classList.remove('open');
        //change display of menu
        links.style.display = "none";
        // Remove the controls from the HTML5 video controls
        document.querySelectorAll('video').forEach(function(video, key){
                if(key >= 2){
                    if (video.hasAttribute("controls")) {
                        video.removeAttribute("controls")   
                    } else {
                        video.setAttribute("controls","controls")   
                    }
                }
            })
    } else{
        target.classList.add('open');
        // Change display of menu
        links.style.display = "flex";
        // Add the controls for HTML5 videos
            document.querySelectorAll('video').forEach(function(video, key){
                if(key >= 2){
                    if (video.hasAttribute("controls")) {
                        video.removeAttribute("controls")   
                    } else {
                        video.setAttribute("controls","controls")   
                    }
                }
            })
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