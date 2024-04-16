const panel = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
}


panel.forEach((panelItem) => panelItem.addEventListener("click", toggleOpen))
panel.forEach((panelItem) => panelItem.addEventListener("transitionend", toggleActive))