const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("introVideo");

  if (!video) {
    console.error("Elemento #introVideo não encontrado!");
    return;
  }

  video.onended = function () {
    console.log("Vídeo finalizado!");
    video.style.display = "none"; // Oculta o vídeo após o término
  };
});
