
//function sumar():void{
//    let a=6
//    let b=7
//   let res=a+b
//   console.log('La suma es: '+res)
//}

function sumar():number{  //Función que no recibe parametros pero regresa datos
    let a=6
    let b=7
    let res=a+b
    console.log('La suma es: '+res)
    return res
}

//Tambien se pueden definir variables
let x=8
let y=2
function sumarvalores(x:number,y:number):number{ //Función que recibe parametros 
    return x + y
}

let resultado=sumar()
console.log(resultado)

let resultadovalores=sumarvalores(x,y) //en vez de (3,2) lo cambiamos a las variables definidas x, y
console.log(resultadovalores)

function sumarmasvalores(x:number,y:number,z:number=5):number{ //Función que recibe parametros 
    return x + y + z
}

let masresultadovalores=sumarmasvalores(x,y) 
console.log(masresultadovalores)

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string, //opcional
    vacunado:boolean,
    mostrar:()=>void //es una funcion tipo flecha que no va a regresar nada en este caso particular, 
    // pero el contenido no se coloca aquí es decir el cuerpo no esta definido aquí 
}

const nuevaMascota:Mascotas={
    nombre:"Firulais",
    edad:5,
    raza: "Pastor Aleman",
    vacunado: true,
    mostrar(){
        console.log(`La edad de ${this.nombre} es ${this.edad} años`)
        //This hace referencia cualquier propiedad que pertenezca al objeto actual
    }
}

function mostrarmascota(mascota:Mascotas,x:number):void{
    mascota.edad+=x //mascota.edad = mascota.edad + x
    console.log(mascota)
    mascota.mostrar()
}

mostrarmascota(nuevaMascota,3)
