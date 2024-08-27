//VARIABLES
const textArea = document.querySelector(".ingreso_de_texto");
const mensaje = document.querySelector(".salida_de_texto");
let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

//FUNCIONES DE BOTONES

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
    }

function botondesEncriptar(){
    const textodesEncriptado = desencriptar(textArea.value)
    mensaje.value = textodesEncriptado
    mensaje.style.backgroundImage = "none"
    }    
function copiarTexto() {
    // Selecciona el cuadro de texto
    var cuadroTexto = document.getElementById("miTexto");

    // Selecciona el texto
    cuadroTexto.select();
    cuadroTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Confirmación (opcional)
    alert("Texto copiado: " + cuadroTexto.value);
    
}
//FUNCIONES PARA CAMBIAR LAS VOCALES POR [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
function encriptar(stringEncriptada){    
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada        
}

function desencriptar(stringdesEncriptada){    
    stringdesEncriptada = stringdesEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesEncriptada.includes(matrizCodigo[i][0])){
            stringdesEncriptada = stringdesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesEncriptada        
}