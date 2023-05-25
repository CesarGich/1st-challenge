const textArea = document.querySelector("#text-area")
const encryptBtn = document.querySelector("#encrypt")
const decryptBtn = document.querySelector("#decrypt")

/* llaves de encriptación
e = enter
i = imes
a = ai
o = ober
u = ufat 
*/

function encryptTxt(text){
    encrypted = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    document.getElementById().value = encrypted 
}

function decrypTxt(text){
    decrypted = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    documento.getElementById().value = decrypted 
}

