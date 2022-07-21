/* Algoritmo que devuelve los caracteres de un string */
let palabra = prompt("Ingrese una palabra o frase para ver caracter por caracter: ")

for(let i=0; i<palabra.length;i++){
    console.log(palabra.charAt(i))
}