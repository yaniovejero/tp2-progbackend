import { Persona } from "./Persona";

export class Profesor extends Persona {
  materia: string;

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    telefono: number,
    sexo: string,
    email: string,
    materia: string
  ) {
      super(nombre, apellido, fechaNacimiento, telefono,sexo, email);
    this.materia = materia;
  }

  presentarse(): void {
    console.log(
        `Soy el profesor : ${this.nombre} ${this.apellido} y dicto la materia : ${this.materia}`
    );
  }
}
