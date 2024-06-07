import { Vuelo } from "../entities/vuelo";
import { Pasajero } from "../entities/pasajero";
import { Avion } from "../entities/avion";

test("La capacidad de pasajeros es de 50% (avion con 4 asientos)", () => {
     // Configuramos los datos de prueba
     const unAvion = new Avion();
     unAvion.cantAsientos = 4;
     
     // Creamos algunos pasajeros
     const pasajero1 = new Pasajero("Roberto", "Moreno");
     const pasajero2 = new Pasajero("Maria", "Bauer");
    
     const unVuelo = new Vuelo();
     unVuelo.avion = unAvion;

     // Añadimos pasajeros al vuelo
     unVuelo.agregarPasajero(pasajero1);
     unVuelo.agregarPasajero(pasajero2);
 
     // Verificamos la capacidad de pasajeros
     const capacidadEsperada = 50; // 50% de capacidad
     const capacidadObtenida = unVuelo.capacidadOcupadaPorPasajeros();
 
     // Aserción
     expect(capacidadObtenida).toBe(capacidadEsperada);
 });

