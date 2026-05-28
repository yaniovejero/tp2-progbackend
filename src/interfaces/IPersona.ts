export interface IPersona<T> {
  nombre: string;
  apellido: string;
  fechaNacimiento: T;
  telefono: number;
  sexo: string;
  email: string;
  presentarse(): void;
}
