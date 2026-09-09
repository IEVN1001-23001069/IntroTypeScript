//La clase es mas compleja que una interfaz pero tiene funciones similares

class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad:number){//El constructor es un tipo de metodo especial que permite inicializar los objetos de la clase generados
        this.nombre = nombre //this hacer referencia a las propiedades del objeto actual
        this.edad = edad
    } 
    imprimir(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años de edad`)
    }
} 

let persona:Persona

persona=new Persona('Juan',23)
persona.imprimir()