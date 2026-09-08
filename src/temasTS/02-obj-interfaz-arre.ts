interface IAlumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number //Colocando un signo de interrogación puedes definir que este valor es un campo opcional
    //De esa forma se puede omitir en el objeto del cual se esta instanciando 
}

//Las interfaces pueden contener otros objetos, otras interfaces e incluso metodos

const alumno:IAlumno={
nombre: "Mario",
apellido:"Lopez",
edad: 22,
email: "lopez@gmail.com",
nota: 5
}

console.table(alumno)

//Arreglos
 let mascotas= ['perro','gato','perico']
 console.log(mascotas)
 mascotas[1]="Nuevo Gato" //Sustituir un elemento del arreglo
 console.log(mascotas)
 mascotas.push('león') //Agragar un elemento al arreglo
 console.log(mascotas)

 // let tem:(number)[]=[] Areglo que admite numeros pero que esta vacio
 let tem:(number|string)[]=[] //Arreglo que admite numeros y strings
 tem.push(11)
 tem.push("once")
 console.log(tem)



