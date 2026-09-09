export interface Producto{ //Generar exportación con export
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Nokia A1",
    precio:1500
}
const tablet:Producto={
    desc:"Ipad Air",
    precio:3500
}

function calcularISV(productos:Producto[]):number{
    let total=0;
    for(const producto of productos){
        total+=producto.precio;
    }
    return total*0.15;
}

const articulos=[telefono,tablet];
const isv=calcularISV(articulos);
console.log("ISV: ", isv);

//Proceso de desestructuracion en funciones para poder llamar parametros especificos desde funciones, por ejemplo poder definir dos valores

export function CalcularISV2(productos:Producto[]):[number,number]{ //Generar exportacion
    let total=0;
    for(const producto of productos){
        total+=producto.precio;
    }
    return[total,total*0.15];
}

const[total,isv2] =CalcularISV2(articulos)
console.log("El total es: ", total),
console.log("El ISV es: ", isv2);
//De esta forma podemos ver como se esta realizando el proceso de desestructuración al agregar un arreglo

