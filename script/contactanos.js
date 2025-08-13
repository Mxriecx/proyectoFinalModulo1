document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío automático

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (nombre === "" || email === "" || mensaje === "") {
    errorMsg.textContent = "Por favor, completa todos los campos.";
    return;
  }

  // Validar formato de email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Por favor, ingresa un email válido.";
    return;
  }

  // Si todo está bien
  errorMsg.textContent = "";
  alert("Egggh, casi que no ");
  this.submit(); // Ahora sí se envía
});
