document.addEventListener("DOMContentLoaded", () => {
  const inputAmigo = document.getElementById("amigo");
  const ulListaAmigos = document.getElementById("listaAmigos");
  const ulResultado = document.getElementById("resultado");
  const listaAmigos = [];

  function agregarAmigo() {
      const nombreAmigo = inputAmigo.value.trim();

      if (nombreAmigo === "") {
          alert("Por favor, ingresa un nombre.");
          return;
      }

      listaAmigos.push(nombreAmigo);

      const li = document.createElement("li");
      li.textContent = nombreAmigo;
      ulListaAmigos.appendChild(li);

      inputAmigo.value = ""; // Limpia el campo de entrada
  }

  function sortearAmigo() {
      if (listaAmigos.length === 0) {
          alert("Agrega al menos un amigo antes de sortear.");
          return;
      }

      const randomIndex = Math.floor(Math.random() * listaAmigos.length);
      const amigoSecreto = listaAmigos[randomIndex];

      ulResultado.innerHTML = `<li><strong>El amigo secreto es: ${amigoSecreto}</strong></li>`;
  }

  // Asigna eventos a los botones según las clases del HTML
  document.querySelector(".button-add").addEventListener("click", agregarAmigo);
  document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});
