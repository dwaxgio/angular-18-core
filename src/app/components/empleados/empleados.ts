export class Empleados {
  //   public nombre: string;
  //   public edad: number;
  //   constructor(nombre: string, edad: number) {
  //     this.nombre = nombre;
  //     this.edad = edad;
  //   }

  // Model: Use constructor to initialice the class attributes

  constructor(
    public nombre: string,
    public edad: number,
    public cargo: string,
    public contratado: boolean
  ) {}
}
