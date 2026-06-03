import { Persona } from "./Persona.js";
export class Alumno extends Persona {
    constructor(nombre, apellido, fechaNacimiento, telefono, sexo, email, carrera) {
        super(nombre, apellido, fechaNacimiento, telefono, sexo, email);
        this.carrera = carrera;
    }
    presentarse() {
        console.log(`Soy el alumn@ : ${this.nombre} ${this.apellido} y estudio la carrera :  ${this.carrera}`);
    }
}
