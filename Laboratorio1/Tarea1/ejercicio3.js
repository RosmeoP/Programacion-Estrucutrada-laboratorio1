const entry = (prompt("ingrese un palindromo"));

let str = entry.toLowerCase(); //esto es para ignorar mayusculas

let str_middle = str.length/2; //esto sirve para dividir el string en 2 mitades que luego seran comparadas

let Errors = 0; //un contador que se usa en el "for" de abajo


//for(let half1 = 0; half1 < str_middle; half1++){
//   console.log(`${str.charAt(half1)}`)
//}

//for(let half2 = str.length; half2 > str_middle; half2--){
//    console.log(`${str.charAt(half2-1)}`)
//}

//esto solo es para ver como podria funcionar lo de abajo
//lo que hace es dividir el string en dos mitades y las dos mitades en caracteres, una de las mitades esta al reves para despues comparar los caracteres


for(let half1 = 0, half2 = str.length; half1 < str_middle && half2 > str_middle; half1++, half2--)
        if (str.charAt(half1) !== str.charAt(half2-1)){
            Errors =+ 1
        } // esto es para ver cuantos caracteres no coinciden


if (Errors == 0){
    console.log(`${entry} es un palindromo`);
} else{
    console.log(`${entry} NO es un palindromo`);
} //con el contador se ve si coincidieron los caracteres de izquierda a derecha y de derecha a izquierda