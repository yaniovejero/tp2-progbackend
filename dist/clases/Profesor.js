import { Persona } from "./Persona.js";
export class Profesor extends Persona {
    constructor(nombre, apellido, fechaNacimiento, telefono, sexo, email, materia) {
        super(nombre, apellido, fechaNacimiento, telefono, sexo, email);
        this.materia = materia;
    }
    presentarse() {
        console.log(`Soy el profesor : ${this.nombre} ${this.apellido} y dicto la materia : ${this.materia}`);
    }
}
