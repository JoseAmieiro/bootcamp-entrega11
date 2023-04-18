const reserva = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1
    }
  ];

class ReservaHotel {
    constructor () {
        this._reserva = [];
        this._subtotal = 0;
        this._total = 0;
    }
    precioHabitacion(tipoHabitacion) {
        switch (tipoHabitacion) {
            case 'standard':
                return 100;
            case 'suite':
                return 150; 
            default:
                return 0;
        }   
    }
    precioPersonasExtra(pax) {
        return (pax > 1 ? (pax - 1) * 40 : 0)
    }
    calculaSubtotal () {
        this._subtotal = reserva.reduce(
            (acc, { tipoHabitacion, pax, noches }) => acc + 
            (noches * this.precioHabitacion(tipoHabitacion) + this.precioPersonasExtra(pax)), 0
            );
            console.log("padre")
      }
    calculaTotal() {
        this._total = (this._subtotal * 1.21).toFixed(1);
    }
    get subtotal() {
        return this._subtotal;
    }
    get total() {
        return this._total;
    }
    set reserva (reservaExterna) {
        this._reserva = reservaExterna;
        this.calculaSubtotal();
        this.calculaTotal();
    }
}


console.log("-------CASO 1---------");

const reservaHotel = new ReservaHotel();
reservaHotel.reserva = reserva;
console.log("Subtotal: ", reservaHotel.subtotal);
console.log("Total: ", reservaHotel.total);

class ReservaHotel2 extends ReservaHotel {
    calculaSubtotal() {
        this._subtotal = reserva.reduce(
            (acc, { noches }) => acc + noches * 85,
            0
        )
        console.log("hola")
    }
    
}

console.log("-------CASO 2---------");
const reserva2 = new ReservaHotel2();
reserva2.reserva = reserva;
console.log('Subtotal: ', reserva2.subtotal);
console.log('Total: ', reserva2.total);
