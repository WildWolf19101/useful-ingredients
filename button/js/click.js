const buttonEffect = document.querySelector(".button-effect");
buttonEffect && buttonEffect.addEventListener("click", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    for (let index = 0; index < 5; index++) {
        const circle = document.createElement("span");
        circle.classList.add("effect-circle");
        circle.style.top = y + "px";
        circle.style.left = x + "px";
        circle.style.animationDelay = index * 0.1 + "s";
        this.appendChild(circle);
        circle && circle.addEventListener("animationend", function () {
            circle.remove();
        })
    }
})