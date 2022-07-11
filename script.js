/* Encriptar */

const textoIngresado = document.querySelector(".input");
const textoEncriptado = document.querySelector(".input2");

function btnencriptar(){
    const msjencriptado = encriptar(textoIngresado.value); 
    textoEncriptado.value = msjencriptado;

}

function encriptar(stringParaEncriptar){

    let reemplazo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    
    for(let i = 0; i < reemplazo.length; i++){
        if(stringParaEncriptar.includes(reemplazo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(reemplazo[i][0],reemplazo[i][1])
        }
    
    }        
    
    exhibirMensaje();
    return stringParaEncriptar;    
}

/* desencriptar */

const textoDesEncriptado = document.querySelector(".input2");

function btnDesencriptar(){
    const msjAdesencriptar = desencriptar(textoIngresado.value); 
    textoDesEncriptado.value = msjAdesencriptar;
}

function desencriptar(paradesEncriptar){
    let reemplazar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]

    paradesEncriptar = paradesEncriptar.toLowerCase();

    for(let i = 0; i < reemplazar.length; i++){
        if(paradesEncriptar.includes(reemplazar[i][0])){
            paradesEncriptar = paradesEncriptar.replaceAll(reemplazar[i][0],reemplazar[i][1])
        }
    }

    exhibirMensaje();
    return paradesEncriptar;
}


/* boton copiar */

function copiar(){
    var contenido = document.querySelector(".input2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Copiado!");
}

function exhibirMensaje(){
    
    document.getElementById("img").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").style.display = "show";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}


