import { Persona } from "./clases/Persona";

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
