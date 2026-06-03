"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./clases/Persona");
const persona = new Persona_1.Persona("Laura", "González", new Date("1991-01-10"), 2984941000, "femenino", "laura.gonzalez@hotmail.com");
console.log("Persona :");
persona.presentarse();
