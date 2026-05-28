import { IPersona } from "../interfaces/IPersona";

export class Persona implements IPersona {
  nombre: string;
  constructor(
    nombre: string,
  ) {
    this.nombre = nombre;
  }

}
