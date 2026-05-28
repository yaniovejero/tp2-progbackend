import { IPersona } from "../interfaces/IPersona";

export class Persona implements IPersona<Date> {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefono: number;
  sexo:string;
  email: string;

  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    telefono: number,
    sexo:string,
    email: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
    this.sexo = sexo;
    this.email = email;
  }

  presentarse(): void {
    console.log(
        `Hola, mi nombre es : ${this.nombre} ${this.apellido} y nací el : ${this.fechaNacimiento.toLocaleDateString("es-AR")}`
    );
  }
}
