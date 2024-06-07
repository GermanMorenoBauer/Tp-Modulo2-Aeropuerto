export class Viaje {
    vuelos = [];
    escalas = [];

    
    agregarVuelo(vuelo){
        this.vuelos.push(vuelo);
    }
    
    agregarEscala(escala){
        this.escalas.push(escala);
    }
    
    duracionTotalVuelos(){

    }

    duracionTotalEscalas(){

    }
    
    duracionTotalAproxEnMins(){
        return this.duracionTotalVuelos() + this.duracionTotalEscalas();
    }
  }