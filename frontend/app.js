const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


window.onload = function() {
  let video = document.getElementById("intro-video");

  video.onended = () => {
    video.classList.add("hidden"); // Faz o vídeo desaparecer suavemente

    setTimeout(() => {
      video.remove(); // Remove do DOM completamente após a transição
    }, 500); // Tempo para dar o fade-out
  };
};

  
