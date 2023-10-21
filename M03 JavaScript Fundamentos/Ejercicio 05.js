/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num >= 1){ 
   console.log("Es Positivo")
   }
   else if  (num <= -1){
      console.log("Es negativo") 
   } 
   else if (num === 0)  
   { 
   console.log( false );
   }
}
esPositivo(-20);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
    console.log(str + "!");
}
agregarSimboloExclamacion("Hello World");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   console.log(nombre +" " +  apellido)
}
combinarNombres("Soy","Henry");

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   console.log("Hola" + " " + nombre + "!");
}
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   console.log(ancho * alto);
}
obtenerAreaRectangulo(5,20);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   console.log(4*(lado));
}
retornarPerimetro(5);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   console.log((base*altura)/2);
}
areaDelTriangulo(5,20)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   console.log(euro*1.20);
}
deEuroAdolar(5)

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
    // Verificar si la entrada es una única letra.
    if (letra.length !== 1) {
      console.log("Dato incorrecto");
   } else {
      // Verificar si la letra es una vocal.
      const vocales = ["a", "e", "i", "o", "u"];
      if (vocales.includes(letra)) {
         console.log("Es vocal");
      } else {
         console.log("Dato incorrecto");
      }
   }
}

esVocal("e");


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
