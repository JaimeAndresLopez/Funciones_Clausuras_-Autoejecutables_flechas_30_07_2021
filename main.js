// //Funciones Autoejecutables

// (function(){
//     console.log(`Hola`);
// })();
// (function(mensaje){
//     console.log(`${mensaje}`);
// })(`Hola Mundo`);

// const resultado = (function(num1, num2){
//     return num1+num2;
// })(2,3);
// if (resultado<=5){
//     console.log(`La condicion se cumple.`, resultado);
// }

// //Clausuras

// const sumarDeUnoAUno = (function(){
//     let data;
//     return function(nombre){
//         if (nombre!=null){
//             data = nombre;
//         }
//         return data;
//         return (nombre != null)?(data= nombre, data) : data;
//     };
// })();
// console.log(sumarDeUnoAUno(`Jaime`));
// console.log(sumarDeUnoAUno(null));
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno());
// console.log(sumarDeUnoAUno(`Miguel`));
// console.log(sumarDeUnoAUno(null));
// console.log(sumarDeUnoAUno());

//Funciones flecha

const saludar = ()=>{
    return `Hola mundo`;
}
const suma =()=> 1+3;
const parametros_1 = mensaje => mensaje;
const condicion = num1 => num1>=3;
console.log(condicion(3));
console.log(suma());
console.log(parametros_1(`Hola`));

const data = (()=>{
    let mensaje;
    return (...men) => 
        (men!=null && men!=undefined) ? mensaje = men: mensaje;
})();
console.log(data('Jaime'));
console.log(data(null));
console.log(data(undefined));
console.log(data());