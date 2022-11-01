/* comenzamos con while -  ACT 1

let numero=100;

while(numero > 0){
if(numero===1){

    document.write("Nos quedan ",numero," pasos por caminar ", '<br>');
} else{
    document.write("Nos quedan ",numero," pasos por caminar ", '<br>');
}

numero= numero - 2;
}

*/

/*----------------------------------------------------------------*/


/** Bucles e interaciones */

//WHILE
/*
//Incremento
let i = 0;
while (i <= 15){
    console.log('El valor de i : ',i);
    i = i + 1;
}


// Decremento
let numero = 100;
while (numero > 0 ){
    document.write( "Te queda de saldo ", numero, '<br>');
    numero = numero - 5;
}


//DO WHILE
let i = 5;
do{
    console.log("El valor de i = ", i);
    i = i + 1;
} while (i < 5)




// CICLO FOR
for (let i = 0; i <=10; i++){
    alert (i)
}
for (let i = 1; i <= 5; i++ ){
// Solicitar en cada repeticion un nombre
let ingresarNombre = prompt('Ingrese un nombre');
// Informar el turno asiganado
    alert ("Turno nro " + i + " Nombre: " +ingresarNombre);
}
for (let i = 1; i <= 20; i++){
    //Solitar en cada repetición un nombre
    let ingresarNombre = prompt('Ingrese un nombre');
    // Informar el turno asignado con el nombre
    alert ("Turno nro ", i, "Nombre: ", ingresarNombre);
}



// Propiedad LENGTH del array 
for (let i = 0; i < 4; i++) {
    console.log(i);
    } 
    
    let frutas = [
        "Manzana",
        "Pera",
        "Frutilla",
        "Pera",
        "Mora",
        "Limón",
        "Kiwi", 
        "Uvas"
        ];
            for (let i = 0; i< frutas.length; i++ ){
                let fruta = frutas[i];
                console.log (fruta + ' tiene ' + fruta.length + ' letras')
            }



// Métodos de ARRAYS: FOREACH
let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosMagicos.forEach(function(objetosMagicos){
    console.log("Objeto con Foreach es:", objetosMagicos);
})
objetosMagicos.forEach((objetosMagicos)=>
    console.log("Lo mismo con función flecha:", objetosMagicos)
)
//MAP 
const numeros = [ 1, 2, 3, 4, 5, 6];
const porDos = numeros.map((x) => x * 2 );
const porCien = numeros.map((x) => x * 100 );
console.log("Por DOS ", porDos);
console.log("Por CIEN ", porCien);
//FIND
const encontrado = numeros.find(elemento => elemento > 3 );
console.log(encontrado);
const nombres = ["Ana", "Ema", "Juan"];
const encontrado2 = nombres.find((elemento) => elemento === "Ema");
console.log(encontrado2);
*/

// FILTER

let numeros = [2, 5, 6, 18, 201];
let numMayoresCinco = numeros.filter((n) => {
    return n > 5
})

console.log(numMayoresCinco);

