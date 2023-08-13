 //Crear una función que tome como parámetro un array de números, y retorne la sumatoria del cubo de los números.
function sumaAlCubo(arr) {
  let sumatoria = 0;
  
   for (let i = 0; i < arr.length; i++) {
      sumatoria += Math.pow(arr[i], 3);
    }
    //for(const ele of arr){
      //sumatoria += Math.pow(ele, 3);
    //}
    //const result = arr.map(x => Math.pow(x, 3)).reduce((acc, ele) => acc + ele, 0);
    //const result = arr.reduce((acc,ele) => acc + Math.pow(ele, 3), 0);
    

    return sumatoria;
}
    
const numbs = [1, 3, 5, 7, 9, 11, 13];
const resultado = sumaAlCubo(numbs);
  
console.log(`La sumatoria del cubo de los números es: ${resultado}`);