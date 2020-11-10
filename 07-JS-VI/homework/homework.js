// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var sum = 0;
  for(var i = 0; i<numeros.length; i++){
    sum += numeros[i];
  }
  cb(sum);
  /*
  var sumaTotal = numeros.reduce(function(acc, curr) {
    return acc + curr;
  },0);
  cb(sumaTotal);
  */
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //array.forEach(cb); // De esta forma el test tambien da correcto.
  array.forEach(function(el, index){
    cb(el);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  /*
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  */
  /*
  var newArray = array.map(function(el){
    return cb(el);
  });
  */
  var newArray = array.map(cb); // De esta forma tambien funciona el test. Imagino es porque callback retorna el resultado y al ser asi lo asigna al array
  // No pude darme cuenta de que el test esperaba que la funcion devuelva el arreglo nuevo hasta que mire en las soluciones que estaba escrito el return al final
  return newArray;  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
