document.getElementById("btn").addEventListener('click', hiConsole);



function hiConsole(){
    console.log("Hola Mund");
    return;
}

document.addEventListener("DOMContentLoaded", load, false);

function load(params) {
    console.log("cargo")
}

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));