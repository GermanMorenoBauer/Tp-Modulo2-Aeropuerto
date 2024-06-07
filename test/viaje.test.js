import { Viaje } from "../entities/viaje.js";
import { Vuelo } from "../entities/vuelo.js";
import { Escala } from "../entities/escala.js";

test("Viaje dura 200 mins, con dos escalas de 40 y dos vuelos de 60", () => {
    const primeraEscala = new Escala(null, 40);
    const segundaEscala = new Escala(null, 40);

    const primerVuelo = new Vuelo(60);
    const segundoVuelo = new Vuelo(60);

    const viaje = new Viaje();
    viaje.agregarEscala(primeraEscala);
    viaje.agregarEscala(segundaEscala);
    viaje.agregarVuelo(primerVuelo);
    viaje.agregarVuelo(segundoVuelo);

    const duracionTotalObtenida = viaje.duracionTotalAproxEnMins();

    expect(duracionTotalObtenida).toBe(200);
});
