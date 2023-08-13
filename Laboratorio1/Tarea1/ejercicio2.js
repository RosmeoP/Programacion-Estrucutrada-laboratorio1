let kilogramo = parseFloat(prompt(`kilogramo`));
//definimos las libras que contiene un kilo
const LibrasxKilo = 2.20462;
/*creando la variable (convertir) donde multiplicaremos los kilos ingresados x las libras que contiene
el kilo :p*/
convertir = kilogramo * LibrasxKilo ;
//este comando se usa para convetir el resultado a un texto en el documento del html
document.write(convertir + "lb")
//Adios.