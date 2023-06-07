"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumple, colorFavorito, sexo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cumple;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
    }
    Persona.prototype.getTelefono = function () {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.getEMail = function () {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.getDireccion = function () {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.agregarTelefono = function (nuevoTelefono) {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.agregarEMail = function (nuevoEMail) {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.agregarDireccion = function (nuevaDireccion) {
        throw new Error('Method not implemented.');
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getCumple = function () {
        return this.cumple;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    return Persona;
}());
exports.default = Persona;
