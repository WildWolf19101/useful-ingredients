const obser = new IntersectionObserver((observer) => {
    observer.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const images = document.querySelectorAll(".box-text img");
images.forEach((image) => {
    obser.observe(image);
}) 