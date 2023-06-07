class Direccion {
    private calle: string;
    private numero: number;
    private piso: string;
    private letra: string;
    private CP: string;
    private poblacion: string;
    private provincia: string;
  
    constructor(calle: string, numero: number, piso: string, letra: string, CP: string, poblacion: string, provincia: string) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.CP = CP;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  
    public getCalle(): string {
      return this.calle;
    }
  
    public getNumero(): number {
      return this.numero;
    }
  
    public getPiso(): string {
      return this.piso;
    }
  
    public getLetra(): string {
      return this.letra;
    }
  
    public getCP(): string {
      return this.CP;
    }
  
    public getPoblacion(): string {
      return this.poblacion;
    }
  
    public getProvincia(): string {
      return this.provincia;
    }
  }
  
  export default Direccion;