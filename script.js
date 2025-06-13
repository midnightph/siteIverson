document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("google-btn");
    const btn2 = document.getElementById("apple-btn");
    
    const carregarHome = () => {
      window.location.href = "telas/home.html"; // Redireciona para home.html
    };

    btn.addEventListener("click", carregarHome);
    btn2.addEventListener("click", carregarHome);
  });