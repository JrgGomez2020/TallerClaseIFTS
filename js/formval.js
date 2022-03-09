function validate() {
    var Nombre = document.getElementById("nombre").value;
    var Asunto = document.getElementById("asunto").value;
    var Telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var Mensaje = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 3) {
        text = "Por favor ingresa un Nombre valido";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Por favor ingresa un Tema";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 8) {
        text = "Por favor ingresa un Numero de celular valido";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Por favor ingresa un Email valido";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 100) {
        text = "Por favor ingresa un mensaje";
        error_message.innerHTML = text;
        return false;
    }
    alert("Enviado Correctamente!");
    return true;
}

function validate() {
    var Nombre = document.getElementById("nombre").value;
    var Asunto = document.getElementById("asunto").value;
    var Telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var Mensaje = document.getElementById("mensaje").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 5) {
        text = "Por favor ingresa un Nombre valido";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Por favor ingresa un Tema";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Por favor ingresa un Numero de celular valido";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Por favor ingresa un Email valido";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Por favor ingresa un mensaje";
        error_message.innerHTML = text;
        return false;
    }
    alert("Enviado Correctamente!");
    return true;
}