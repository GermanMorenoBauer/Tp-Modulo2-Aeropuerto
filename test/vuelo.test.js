import { Vuelo } from "../entities/vuelo";
import { Pasajero } from "../entities/pasajero";
import { Avion } from "../entities/avion";

test("La capacidad de pasajeros es de 50% (avion con 4 asientos)", () => {
    const unAvion = new Avion();
    unAvion.cantAsientos = 4;

    const pasajero1 = new Pasajero();
    const pasajero2 = new Pasajero();

    const unVuelo = new Vuelo();
    unVuelo.avion = unAvion;

    unVuelo.agregarPasajero(pasajero1);
    unVuelo.agregarPasajero(pasajero2);

    const capacidadEsperada = 50;
    const capacidadObtenida = unVuelo.capacidadOcupadaPorPasajeros();

    expect(capacidadObtenida).toBe(capacidadEsperada);
});


