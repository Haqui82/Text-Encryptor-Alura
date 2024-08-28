const textArea = document.getElementById('text-area').value;
const mensaje = document.querySelector(".mensaje");
let LoCodificado = textArea;

/**La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

console.log(LoCodificado);

function btnEncriptar(){
    encriptar();
    mensaje.value = LoCodificado;
    /*const textoEncriptado = encriptar(textArea);
    mensaje.value = textoEncriptado; */
}

function encriptar() {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];    

    console.log("valor de " + LoCodificado + " desde la entrada de la función encriptar");

    if (LoCodificado !== undefined && LoCodificado !== null && LoCodificado !== " ") {
        for(let i=0; i < matrizCodigo.length; i++){
            if(LoCodificado.includes(matrizCodigo[i][0])){
                LoCodificado = LoCodificado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }   
    }
    //return LoCodificado;    
    console.log("valor de " + LoCodificado + " desde la SALIDA de la función encriptar");
}

function desencriptar(LoCodificado) {
    
}