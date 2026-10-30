

//EJERCICIO 1

//Creo una funcion
//Le declaro un elemento
//Al elemento le hago hacerse en mayusculas
//Creo del elemento un array para que me deje trabajar poniendole los espacios 
//Le pongo los espacios
//returneo el elemento
//imprimo
function mayus(nombre) {
    nombre = nombre.toUpperCase().split(``).join(" ")
    return nombre;
    }
console.log(mayus("Ana"));

//EJERCICIO 2

//Creo una funcion
//Le declaro el elemento nombre
//Al elemento le hago convertirse en un array y le digo que cada vez que vea un espacio lo detecte para separar el elemento
//Returneo leyendo la longitud
//Imprimo 

function numeros(nombre1) {
    nombre1 = nombre1.split(` `)
  return nombre1.length;
}
 console.log(numeros("Ana Carlos"));

 //EJERCICIO 3

//Creo una funcion
//Le declaro un elemento
//El elemento lo convierto en un array mediante un split y le digo que cada vez que cuente una letra lo determine
//Returneo leyendo la longitud
//Imprimo
