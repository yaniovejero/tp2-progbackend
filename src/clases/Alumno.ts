import { Persona } from "./Persona";

export class Alumno extends Persona {
  carrera: string;

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    telefono: number,
      sexo:string,
      email: string,
    carrera: string
  ) {
      super(nombre, apellido, fechaNacimiento, telefono,sexo, email);
    this.carrera = carrera;
  }

  presentarse(): void {
    console.log(
        `Soy el alumn@ : ${this.nombre} ${this.apellido} y estudio la carrera :  ${this.carrera}`
    );
  }
}
