"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, CP, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.CP = CP;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.getCP = function () {
        return this.CP;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    return Direccion;
}());
exports.default = Direccion;
