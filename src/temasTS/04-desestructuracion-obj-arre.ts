interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles,
}

interface Detalles{
    autor:string,
    anio:number,
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles:{
        autor:"Ed Sheran",
        anio: 2015
    }
}

console.log("El volumen actual es: ", reproductor.volumen);
console.log("El segundo actual es: ", reproductor.segundo);
console.log("La canción actual es: ", reproductor.cancion);
console.log("El autor es: ", reproductor.detalles.autor);
console.log("El año es: ", reproductor.detalles.anio);

//Desestruructación es llegar  a llamar a la propidad desde el punto que queremos sin hacer referencia al padre

const{volumen,segundo,cancion,detalles}=reproductor
const{autor,anio}=detalles //Aquí se puede ver el proceso de desestructuración a fondo
//Agragamos detalles y nos permite llamar a detalles fuera del padre solo mencionando la propiedad

console.log("El volumen actual es: ", volumen); //Este es el proceso de desestruructación sin el padre
console.log("El segundo actual es: ", segundo); //Pasamos directo a la propiedad determinada
console.log("El autor es: ",autor);
console.log("El año es: ",anio);

const dbz:string[]=['Goku','Vegeta','Trunks','Piccolo']
console.log(dbz[1])
//La desustructuracion me permitira ir colocando propiedades individuales y llamarlas por su propiedad
const[p1,,,p2]=dbz
console.log(p2) //Imprimira la tercera posicion del arreglo dependiendo del numero de espacios
