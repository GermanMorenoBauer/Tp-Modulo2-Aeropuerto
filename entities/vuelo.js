export class Vuelo {
    pasajeros = [];
    tripulacion  = [];
    avion;
    fechaHoraPartida;
    aeropuertoSalida;
    aeropuertoLlegada;
  
    agregarPasajero(pasajero){
        this.pasajeros.push(pasajero);
    }

    capacidadOcupadaPorPasajeros(){
        return (this.pasajeros.length * 100) / this.avion.cantAsientos;
    }
  }