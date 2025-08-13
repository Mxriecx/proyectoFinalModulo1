document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío automático

  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let mensaje = document.getElementById("mensaje");
  let errorMsg = document.getElementById("errorMsg");
  let successMsg = document.getElementById("successMsg");

  let isValid = true;

  // Limpiar estilos previos
  errorMsg.textContent = "";
  successMsg.style.display = "none";
  [nombre, email, mensaje].forEach(input => input.style.borderColor = "#ccc");

  // Validar campos vacíos
  if (nombre.value.trim() === "") {
    nombre.style.borderColor = "red";
    isValid = false;
  }
  if (email.value.trim() === "") {
    email.style.borderColor = "red";
    isValid = false;
  }
  if (mensaje.value.trim() === "") {
    mensaje.style.borderColor = "red";
    isValid = false;
  }

  if (!isValid) {
    errorMsg.textContent = "Por favor, completa todos los campos.";
    return;
  }

  // Validar email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.style.borderColor = "red";
    errorMsg.textContent = "Por favor, ingresa un email válido.";
    return;
  }

  // Todo correcto
  errorMsg.textContent = "";
  successMsg.style.display = "block";

  // Si quieres enviar el formulario realmente:
  // this.submit();
});