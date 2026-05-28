import { Persona } from "./clases/Persona";
import { Profesor } from "./clases/Profesor";
import { Alumno } from "./clases/Alumno";

const persona = new Persona(
  "Laura",
  "González",
  new Date("1991-01-10"),
  2984941000,
  "femenino",
  "laura.gonzalez@hotmail.com"
);
console.log("Persona :");
persona.presentarse();

const profesor = new Profesor(
  "Carlos",
  "Rodríguez",
  new Date("1980-03-03"),
  2984115554,
  "masculino",
  "carlos.rodriguez@hotmail.com",
  "Analisis Matemático II"
);
console.log("\nProfesor :");
profesor.presentarse();

const alumno = new Alumno(
  "Yanina",
  "Ovejero",
  new Date("1998-01-01"),
  2984258558,
  "femenino",
  "yanina.ovejero@gmail.com",
  "Tecnicatura Superior en Desarrollo de Software Full Stack"
);
console.log("\nAlumno :");
alumno.presentarse();
