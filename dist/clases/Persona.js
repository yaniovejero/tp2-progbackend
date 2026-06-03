"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, fechaNacimiento, telefono, sexo, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.sexo = sexo;
        this.email = email;
    }
    presentarse() {
        console.log(`Hola, mi nombre es : ${this.nombre} ${this.apellido} y nací el : ${this.fechaNacimiento.toLocaleDateString("es-AR")}`);
    }
}
exports.Persona = Persona;
