export class Persona {
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
