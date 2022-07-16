function windowScroll() {
    const navbar = document.getElementById("nav-bar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
};

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
});


// function readMore() {
let pen = document.getElementsByClassName(".service-para").style;
    pen.color = "red";
    // pen.style.display = "flex";
    // pen.style.whiteSpace = "wrap";
    // pen.style.textOverflow = "none";
    // pen.style.maxWidth = "fit-content";
// }

// document.addEventListener("onclick", readMore())

// console.log(pen);