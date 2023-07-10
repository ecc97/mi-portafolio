const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('#mensaje');
const botonEnviar = document.querySelector('.formcontacto__boton');

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

textarea.addEventListener("blur", (evento) => {
    validaTextarea(evento.target);
});

function valida(input){
    const tipoDeEntrada = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove('formcontacto__input-label--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = '';
    }else{
        input.parentElement.classList.add('formcontacto__input-label--invalid');
        input.parentElement.querySelector('.input-mensaje-error').innerHTML = mostrarMensajeError(tipoDeEntrada, input);
    }
}

function validaTextarea(textarea) {
    if (textarea.value.trim() !== '') {
        textarea.parentElement.classList.remove('formcontacto__textarea-label--invalid');
        textarea.parentElement.querySelector('.textarea-mensaje-error').innerHTML = '';
    } else {
        textarea.parentElement.classList.add('formcontacto__textarea-label--invalid');
        textarea.parentElement.querySelector('.textarea-mensaje-error').innerHTML = 'Este campo mensaje no puede estar vacío';
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido, recuerda incluir @ y completarlo",
    },
    asunto: {
        valueMissing: "Este campo asunto no puede estar vacío",
        patternMismatch: "El asunto debe contener entre 3 a 30 caracteres",
    },

};

function mostrarMensajeError(tipoDeEntrada, input){
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeEntrada][error];
        }
    })
    return mensaje
}

botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    const formulario = document.getElementById('form');
    const inputs = document.querySelectorAll('input');
    const textarea = document.getElementById('mensaje');

    let accion = document.querySelector('#mostrar-accion');
    let allValid = true;

    inputs.forEach((input) => {
        if (!input.validity.valid) {
            allValid = false;
        }
    });

    if (!textarea.validity.valid) {
        allValid = false;
    }

    if (allValid) {
        accion.innerHTML = 'Acción completada y exitosa';
        accion.style.backgroundColor = '#4CAF50'
        formulario.submit(); 
    } else {
        accion.innerHTML = 'Asegúrate de completar todos los campos';
        accion.style.backgroundColor = '#EF5350'
    }
});