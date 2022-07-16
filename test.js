
function readMore() {
    let displays = document.querySelectorAll(".service-para");
    displays.innerHTML.style.display = "flex";
    displays.innerHTML.style.whiteSpace = "wrap";
    displays.innerHTML.style.textOverflow = "none";
    displays.innerHTML.style.maxWidth = "fit-content";
}

document.addEventListener("onclick", readMore())