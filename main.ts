import Persona from './persona';
import Direccion from './direccion';
import EMail from './correo';
import Telefono from './telefonos';

const persona1 = new Persona("Raquel", "Ricote", 29, "12345678A", "01/02/1993", "Morado", "Mujer");
const persona2 = new Persona("Ruben", "Zabalza", 28, "66666666B", "06/06/1996", "Azul", "Hombre");
const persona3 = new Persona("Barbara", "Bermudez", 27, "77777777C", "07/07/1997", "Verde", "Mujer");

console.log("Registro 1:");
console.log("Nombre:", persona1.getNombre());
console.log("Apellidos:", persona1.getApellidos());
console.log("Edad:", persona1.getEdad());
console.log("DNI:", persona1.getDni());
console.log("Cumple:", persona1.getCumple());
console.log("Color favorito:", persona1.getColorFavorito());
console.log("Sexo:", persona1.getSexo());

console.log("Registro 2:");
console.log("Nombre:", persona2.getNombre());
console.log("Apellidos:", persona2.getApellidos());
console.log("Edad:", persona2.getEdad());
console.log("DNI:", persona2.getDni());
console.log("Cumple:", persona2.getCumple());
console.log("Color favorito:", persona2.getColorFavorito());
console.log("Sexo:", persona2.getSexo());

console.log("Registro 3:");
console.log("Nombre:", persona3.getNombre());
console.log("Apellidos:", persona3.getApellidos());
console.log("Edad:", persona3.getEdad());
console.log("DNI:", persona3.getDni());
console.log("Cumple:", persona3.getCumple());
console.log("Color favorito:", persona3.getColorFavorito());
console.log("Sexo:", persona3.getSexo());

const nuevaDireccion = new Direccion("Calle Falsa", 666, "6A", "", "12345", "Madrid", "Madrid");
const nuevoEMail = new EMail("Personal", "correofalso@fake.com");
const nuevoTelefono = new Telefono("Móvil", "666666666");

persona1.agregarDireccion(nuevaDireccion);
persona1.agregarEMail(nuevoEMail);
persona1.agregarTelefono(nuevoTelefono);

console.log("Registro 1 modificado:");
console.log("Nombre:", persona1.getNombre());
console.log("Apellidos:", persona1.getApellidos());
console.log("Edad:", persona1.getEdad());
console.log("DNI:", persona1.getDni());
console.log("Cumpleaños:", persona1.getCumple());
console.log("Color favorito:", persona1.getColorFavorito());
console.log("Sexo:", persona1.getSexo());
console.log("Dirección:", persona1.getDireccion());
console.log("Mails:", persona1.getEMail());
console.log("Teléfonos:", persona1.getTelefono());