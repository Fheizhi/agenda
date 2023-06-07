"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EMail = /** @class */ (function () {
    function EMail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    EMail.prototype.getTipo = function () {
        return this.tipo;
    };
    EMail.prototype.getDireccion = function () {
        return this.direccion;
    };
    return EMail;
}());
exports.default = EMail;
