function openMobileNav(x) {
    x.classList.toggle("nav-btn-change");
    
    var container = document.getElementsByClassName("fullscreen-container")[0].style;
    if (container.width == "100%") {
        container.width="0";
    } else {
        container.width="100%";
    }
    
    document.body.style.toggleClass("overflow");
}