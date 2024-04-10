const btnModal = document.querySelector(".button-modal");
const modal = document.querySelector("#modal-simple");
const modalClose = document.querySelector(".modal-close");
btnModal && btnModal.addEventListener("click", function () {
    if (!modal) return;
    modal.classList.add("is-open");
})

modalClose && modalClose.addEventListener("click", function () {
    if (!modal) return;
    modal.classList.remove("is-open");
})