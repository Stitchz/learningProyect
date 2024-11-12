document.addEventListener("DOMContentLoaded", function() {
  // Respuesta correcta
  const respuestaCorrecta = "I'll be back";

  // Opciones de respuesta
  const opciones = ["I will return", "I'll be back", "I go back"];

  // Contenedor donde se añadirán los botones
  const buttonContainer = document.getElementById("button-container");

  // Función para crear los botones
  opciones.forEach((opcion) => {
      const button = document.createElement("button");
      button.textContent = opcion;
      button.classList.add("btn", "btn-outline-primary", "m-2");
      button.style.padding = "10px";

      // Evento de clic en cada botón
      button.addEventListener("click", function() {
          // Verificar si la opción seleccionada es correcta
          if (opcion === respuestaCorrecta) {
              button.style.backgroundColor = "green";
              button.style.color = "white";
              button.innerHTML += ' <i class="bi bi-check-circle"></i>'; // Agrega un ícono de check
          } else {
              button.style.backgroundColor = "red";
              button.style.color = "white";
              button.innerHTML += ' <i class="bi bi-x-circle"></i>'; // Agrega un ícono de X
          }

          // Desactivar todos los botones después de la selección
          document.querySelectorAll("#button-container button").forEach((btn) => {
              btn.disabled = true;
          });
      });

      buttonContainer.appendChild(button);
  });
});
