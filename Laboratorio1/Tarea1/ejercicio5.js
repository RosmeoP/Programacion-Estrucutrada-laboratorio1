//se crea la variable nombrada numero la cual se usara para ingresar el numero que queres en tabla
let numero = parseInt(prompt("Ingrese el numero de tabla que desea ver:"));
// con este if creamos la condicion de que si no escribes nada se te marcara como invalido
if (isNaN(numero)){
    alert("Numero invalido");
} else{
    //
    console.log(`tabla de ${numero}`);  
    for (let i = 1; i <= 10; i++) {
        /*definimos el (resultado) que termina siendo el numero ingresado x el valor de {i} que es del 1
        al 10*/
        const resultado = numero * i;
        /*vuelvo a usar el comando (document.write) para mostrar en pantalla solo que esta vez
        agregando el "br" para separar la respuesta en forma vertical*/
        document.write(`${numero} x ${i} = ${resultado} <br>`)
    }
}
