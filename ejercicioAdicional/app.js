const reserva = [
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 3
    },
    {
      tipoHabitacion: "standard",
      desayuno: false,
      pax: 1,
      noches: 4
    },
    {
      tipoHabitacion: "suite",
      desayuno: true,
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
    precioDesayuno(desayuno, noches) {
        return (desayuno === true ? 15 * noches : 0)
    }
    calculaSubtotal () {
        this._subtotal = reserva.reduce(
            (acc, { tipoHabitacion, pax, noches, desayuno }) => acc + 
            (noches * this.precioHabitacion(tipoHabitacion) + this.precioPersonasExtra(pax) + 
            this.precioDesayuno(desayuno, noches)), 0
            );
      }
    calculaTotal() {
        this._total = (this._subtotal * 1.21).toFixed(2);
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


console.log("-------Tarifa Particular---------");

const reservaHotel = new ReservaHotel();
reservaHotel.reserva = reserva;
console.log("Subtotal: ", reservaHotel.subtotal);
console.log("Total: ", reservaHotel.total);


class ReservaHotel2 extends ReservaHotel {
    calculaTotal() {
        this._total = reserva.reduce(
            (acc, { noches, desayuno }) => acc + noches * 85 + this.precioDesayuno(desayuno),
            0
        )
    }
}

console.log("-------CTarifa Tour---------");
const reserva2 = new ReservaHotel2();
reserva2.reserva = reserva;
console.log('total: ', reserva2.total);