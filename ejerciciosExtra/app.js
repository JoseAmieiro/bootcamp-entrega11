class Cuenta {
    constructor(idCuenta, nifBeneficiario, nombreBeneficiario, nombreCuenta, saldo, tipoCuenta) {
      this.idCuenta = idCuenta;
      this.nifBeneficiario = nifBeneficiario;
      this.nombreBeneficiario = nombreBeneficiario;
      this.nombreCuenta = nombreCuenta;
      this.saldo = saldo;
      this.tipoCuenta = tipoCuenta;
    }
  
    muestraEstado() {
      console.log(`*** Cuenta: ${this.idCuenta} *****`);
      console.log(`Nombre Beneficiario: ${this.nombreBeneficiario}`);
      console.log(`Nombre Cuenta: ${this.nombreCuenta}`);
      console.log(`Tipo: ${this.tipoCuenta}`);
      console.log(`Saldo: ${this.saldo}`);
      console.log(`**********************************`);
    }
  }
  
  class Transaccion {
    constructor(cuentaOrigen, cuentaDestino, cantidadTransferir) {
      this.cuentaOrigen = cuentaOrigen;
      this.cuentaDestino = cuentaDestino;
      this.cantidadTransferir = cantidadTransferir;
    }
  
    realizaTransaccion() {
      const comision = this.calcularComision();
      this.cuentaOrigen.saldo -= (this.cantidadTransferir + comision);
      this.cuentaDestino.saldo += this.cantidadTransferir;
    }
  
    calcularComision() {
      return (this.cuentaOrigen.tipoCuenta === "particular") ? 1 : 0.5;
    }
  
    muestraTransaccion() {
      console.log(`Origen: ${this.cuentaOrigen.idCuenta}`);
      console.log(`Destino: ${this.cuentaDestino.idCuenta}`);
      console.log(`Cuantía: ${this.cantidadTransferir}`);
      console.log(`Comision: ${this.calcularComision()}`);
      console.log(`************************`);
    }
  }
  
  class LibroContable {
    constructor() {
      this.transacciones = [];
    }
  
    realizaTransaccion(transaccion) {
      transaccion.realizaTransaccion();
      this.transacciones.push(transaccion);
    }
  
    listaTransacciones() {
      console.log(`**** Transacciones *****`);
      this.transacciones.forEach(transaccion => {
        transaccion.muestraTransaccion();
      });
    }
  }
  
  const cuentaA = new Cuenta(
    "ES6621000418401234567891 ",
    "12345678X",
    "Juan Perez",
    "Nomina",
    1400,
    "particular"
  );
  
  const cuentaB = new Cuenta(
    "ES1000492352082414205416",
    "A84939209",
    "Gestiones SL",
    "gastos",
    84400,
    "empresa"
  );
  
  console.log("** estado inicial ***");
  cuentaA.muestraEstado();
  cuentaB.muestraEstado();
  
  const libroContable = new LibroContable();
  const transaccion = new Transaccion(cuentaB, cuentaA, 1800);
  libroContable.realizaTransaccion(transaccion);
  
  console.log("** estado final ***");
  cuentaA.muestraEstado();
  cuentaB.muestraEstado();
  
  console.log("** Listado transacciones ***");
  libroContable.listaTransacciones();
  