/* Script de validación de usuario  */
function validarUsuario() {
    const usuarioInput = document.getElementById("usuario");
    const errorSpan = document.getElementById("usuario-error");
    const usuarioRegex = /^[a-zA-Z0-9_]{4,}$/;

    if (usuarioInput.value.trim() === "") {
        errorSpan.textContent = "El nombre de usuario no puede estar vacío.";
    } else if (!usuarioRegex.test(usuarioInput.value)) {
        errorSpan.textContent = "El usuario debe tener al menos 4 caracteres y solo puede contener letras, números y '_'.";
    } else {
        errorSpan.textContent = "";
    }
}

/* Script de validación de contraseña */
function validarContraseña() {
    const contraseñaInput = document.getElementById("contraseña");
    const errorSpan = document.getElementById("contraseña-error");
    const contraseñaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (contraseñaInput.value.trim() === "") {
        errorSpan.textContent = "La contraseña no puede estar vacía.";
    } else if (!contraseñaRegex.test(contraseñaInput.value)) {
        errorSpan.textContent = "La contraseña debe tener al menos 8 caracteres, incluir una letra, un número y un carácter especial (@$!%*?&).";
    } else {
        errorSpan.textContent = "";
    }
}

/* Script de validación de correo */
function validarCorreo() {
    const correoInput = document.getElementById("correo");
    const errorSpan = document.getElementById("correo-error");
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (correoInput.value.trim() === "") {
        errorSpan.textContent = "El correo no puede estar vacío.";
    } else if (!correoRegex.test(correoInput.value)) {
        errorSpan.textContent = "El formato del correo no es válido. Ejemplo: usuario@correo.com";
    } else {
        errorSpan.textContent = "";
    }
}

/* Script de validación de fecha de nacimiento*/
function validarFechaNacimiento() {
    const fechaInput = document.getElementById("fecha-nacimiento");
    const errorSpan = document.getElementById("fecha-error");
    const fechaIngresada = new Date(fechaInput.value);
    const hoy = new Date();

    if (fechaIngresada > hoy) {
        errorSpan.textContent = "Sólo Marty McFly puede venir del futuro de momento";
        return; 
    }

    let edad = hoy.getFullYear() - fechaIngresada.getFullYear();
    const mes = hoy.getMonth() - fechaIngresada.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaIngresada.getDate())) {
        edad--;
    }

    if (fechaInput.value === "") {
        errorSpan.textContent = "La fecha de nacimiento no puede estar vacía.";
    } else if (edad < 18) {
        errorSpan.textContent = "Debes tener al menos 18 años.";
    } else if (edad > 120) {
        errorSpan.textContent = "Seguro que te conservas genial pero el ser humano no es inmortal...";
    } else {
        errorSpan.textContent = "";
    }
}

/* Script de validación de telefono móvil */
function validarTelefono() {
    const telefonoInput = document.getElementById("telefono");
    const errorSpan = document.getElementById("telefono-error");
    const telefonoRegex = /^[0-9]{9,15}$/;

    if (telefonoInput.value === "") {
        errorSpan.textContent = "El teléfono no puede estar vacío.";
    } else if (!telefonoRegex.test(telefonoInput.value)) {
        errorSpan.textContent = "Ingrese un teléfono válido (9-15 dígitos numéricos).";
    } else {
        errorSpan.textContent = "";
    }
}

/* Script para habilitar o deshabilitar el botón */
function validarFormulario() {
    const errorSpans = document.querySelectorAll("span[id$='-error']");
    const botonRegistro = document.getElementById("registro-btn");

    const hayErrores = Array.from(errorSpans).some(span => span.textContent.trim() !== "");

    botonRegistro.disabled = hayErrores;
}
document.addEventListener("input", validarFormulario);
document.addEventListener("DOMContentLoaded", validarFormulario);




    /* Activar tooltips */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

