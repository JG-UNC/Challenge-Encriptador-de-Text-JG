// Validar el texto de entrada
function validarTexto(texto) {
    const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    const mayusculas = /[A-Z]/g;

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return false;
    } else if (texto.trim() === "") {
        alert("Ingrese un mensaje para encriptar");
        return false;
    } else {
        return true;
    }
}

// Función para encriptar el texto
const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(texto) {
    let encriptado = texto;
    for (const [key, value] of Object.entries(reglas)) {
        encriptado = encriptado.replaceAll(key, value);
    }
    return encriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let desencriptado = texto;
    for (const [key, value] of Object.entries(reglas)) {
        desencriptado = desencriptado.replaceAll(value, key);
    }
    return desencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(copiado).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Event listeners para los botones
document.querySelector("#btn-encriptar").addEventListener("click", () => {
    const textoIngresado = document.querySelector("#input-texto").value;
    if (validarTexto(textoIngresado)) {
        document.querySelector("#msg").value = encriptar(textoIngresado);
    }
});

document.querySelector("#btn-desencriptar").addEventListener("click", () => {
    const textoIngresado = document.querySelector("#input-texto").value;
    if (validarTexto(textoIngresado)) {
        document.querySelector("#msg").value = desencriptar(textoIngresado);
    }
});

document.querySelector("#btn-copy").addEventListener("click", copiarTexto);
