import Direccion from "./direccion";
import Telefono from "./telefonos";
import EMail from "./correo";

class Persona {
    getTelefono(): any {
        throw new Error('Method not implemented.');
    }
    getEMail(): any {
        throw new Error('Method not implemented.');
    }
    getDireccion(): any {
        throw new Error('Method not implemented.');
    }
    agregarTelefono(nuevoTelefono: Telefono) {
        throw new Error('Method not implemented.');
    }
    agregarEMail(nuevoEMail: EMail) {
        throw new Error('Method not implemented.');
    }
    agregarDireccion(nuevaDireccion: Direccion) {
        throw new Error('Method not implemented.');
    }
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumple: string;
    private colorFavorito: string;
    private sexo: string;
  
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumple: string, colorFavorito: string, sexo: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.dni = dni;
      this.cumple = cumple;
      this.colorFavorito = colorFavorito;
      this.sexo = sexo;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public getApellidos(): string {
      return this.apellidos;
    }
  
    public getEdad(): number {
      return this.edad;
    }
  
    public getDni(): string {
      return this.dni;
    }
  
    public getCumple(): string {
      return this.cumple;
    }
  
    public getColorFavorito(): string {
      return this.colorFavorito;
    }
  
    public getSexo(): string {
      return this.sexo;
    }
  }
  
  export default Persona;