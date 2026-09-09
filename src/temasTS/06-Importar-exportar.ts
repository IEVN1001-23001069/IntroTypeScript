//Buscar importar y exportar funciones e interfaces
//Despues de agregar la linea export en las funciones e interfaces que queremos utilizar ahora las agregamos con Import

import { type Producto,CalcularISV2 } from "./05-desestructuracion-funciones"; //Dicta la dirección del archivo

const carrito:Producto[]=[
    {
        desc:'Telefono 1',
        precio:1000
    },
    {
        desc:'Telefono 2',
        precio:2300
    },
    {
        desc:'Telefono 3',
        precio:2388
    },
]

const[total,isv2]=CalcularISV2(carrito);
console.log("Total carrito:",total);
console.log("ISV Carrito",isv2);