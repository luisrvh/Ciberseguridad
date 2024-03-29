document.addEventListener("DOMContentLoaded", function() {
    var submitButtons = document.querySelectorAll('.submit-btn');
  
    submitButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Obtener los valores de los campos del formulario
        var name = document.querySelector('input[name="Name"]').value;
        var email = document.querySelector('input[name="Email"]').value;
        var phoneNumber = document.querySelector('input[name="Phone Number"]').value;
        var message = document.querySelector('textarea[name="Message"]').value;
  
        // Validar el formato del correo electrónico
        if (!validateEmail(email)) {
          showErrorMessage("Por favor, introduce una dirección de correo electrónico válida.");
          return;
        }
  
        // Validar el formato del número de teléfono
        if (!validatePhoneNumber(phoneNumber)) {
          showErrorMessage("Por favor, introduce un número de teléfono válido.");
          return;
        }
  
        // Mostrar mensaje de confirmación en la consola del navegador
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNumber);
        console.log("Message: " + message);
  
        // Mostrar mensaje en una ventana con efecto
        var confirmationWindow = document.createElement('div');
        confirmationWindow.className = 'confirmation-window';
        confirmationWindow.innerHTML = '<p>¡Tus datos han sido enviados! Pronto nos pondremos en contacto contigo. Gracias.</p>';
        document.body.appendChild(confirmationWindow);
  
        // Desvanecer el mensaje después de 3 segundos (3000 milisegundos)
        setTimeout(function() {
          confirmationWindow.style.opacity = '0';
        }, 3000);
  
        // Redirigir a la página index.html después de 3.5 segundos (3500 milisegundos)
        setTimeout(function() {
          window.location.href = "index.html";
        }, 3500); // Cambiar a tu página index.html
      });
    });
  
    // Función para validar el formato de correo electrónico
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  
    // Función para validar el formato del número de teléfono
    function validatePhoneNumber(phoneNumber) {
      // Se asume que el número de teléfono debe tener al menos 10 dígitos
      var re = /^\d{10,}$/;
      return re.test(phoneNumber);
    }
  
    // Función para mostrar el mensaje de alerta
    function showErrorMessage(message) {
      var alertMessage = document.createElement('div');
      alertMessage.className = 'alert-message';
      alertMessage.textContent = message;
      document.body.appendChild(alertMessage);
      
      // Desvanecer el mensaje después de 3 segundos (3000 milisegundos)
      setTimeout(function() {
        alertMessage.style.opacity = '0';
      }, 3000);
    }
  });

  function startAnimation() {
    document.getElementById('animatedText').style.animationPlayState = 'running'; /* Inicia la animación */
}
  