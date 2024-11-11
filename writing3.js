document.addEventListener("DOMContentLoaded", function() {
    // Palabras correctas en un array
    const palabrasCorrectas = ["call"];
  
    // Contenedor donde se añadirá el campo de entrada
    const inputContainer = document.getElementById("input-container");
  
    // Campo de entrada
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Please write the sentence:";
    input.style.padding = "10px";
    input.style.width = "200px";
  
    // Botón de verificación
    const verificarBtn = document.createElement("button");
    verificarBtn.textContent = "Verificar";
    verificarBtn.style.marginTop = "10px";
    verificarBtn.style.padding = "10px";
    verificarBtn.style.border = "none";
    verificarBtn.style.borderRadius = "5px";
    verificarBtn.style.cursor = "pointer";
  
    // Agregar los elementos al contenedor
    inputContainer.appendChild(input);
    inputContainer.appendChild(verificarBtn);
  
    // Función para verificar la palabra ingresada
    verificarBtn.addEventListener("click", function() {
      const palabraIngresada = input.value.toLowerCase();
      let esCorrecta = false;
  
      // Iterar sobre cada palabra correcta
      for (const palabraCorrecta of palabrasCorrectas) {
        if (palabraIngresada === palabraCorrecta.toLowerCase()) {
          esCorrecta = true;
          break; // Salimos del bucle si encontramos una coincidencia
        }
      }
  
      // Mostrar el feedback en el botón
      if (esCorrecta) {
        verificarBtn.textContent = "✅ Correcto";
        verificarBtn.style.backgroundColor = "green";
        verificarBtn.style.color = "white";
      } else {
        verificarBtn.textContent = "❌ Incorrecto";
        verificarBtn.style.backgroundColor = "red";
        verificarBtn.style.color = "white";
      }
    });
  });
  