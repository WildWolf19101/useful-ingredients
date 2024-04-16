let index = 0;
displayImage();

function displayImage() {
    const images = document.querySelectorAll(".slide-image");

    images.forEach((image) => {
        image.style.display = "none";
    });

    images[index].style.display = "block";

    index = (index + 1) % images.length;

    setTimeout(displayImage, 3000);
}
