import { RankeadorDeAeropuertos } from "../entities/ranker_aeropuertos";
import {Aeropuerto} from "../entities/aeropuerto";
import {Escala} from "../entities/escala";

test("Le paso 3 aereopuertos y me tiene que devolver el que tiene menos escalas, en este caso Aereopuerto Ciudad de Cordoba", () =>{
    let aeropuerto1 = new Aeropuerto();
    let aeropuerto2 = new Aeropuerto();
    let aeropuerto3 = new Aeropuerto();

    aeropuerto1.nombre = "Aeropuerto Ezeiza";
    aeropuerto2.nombre = "Aeroparque CABA";
    aeropuerto3.nombre = "Aeropuerto Ciudad de Cordoba";

    let escalas1 = new Escala(aeropuerto1,null);
    let escalas2 = new Escala(aeropuerto1,null);
    let escalas3 = new Escala(aeropuerto1,null);
    let escalas4 = new Escala(aeropuerto2,null);
    let escalas5 = new Escala(aeropuerto2,null);
    let escalas6 = new Escala(aeropuerto3,null);


    aeropuerto1.agregarEscala(escalas1);
    aeropuerto1.agregarEscala(escalas2);
    aeropuerto1.agregarEscala(escalas3);
    aeropuerto2.agregarEscala(escalas4);
    aeropuerto2.agregarEscala(escalas5);
    aeropuerto3.agregarEscala(escalas6);

    let rankingAereopuertos = new RankeadorDeAeropuertos();
    let aeropuertoConMenosEscalas = rankingAereopuertos.aeropuertoConMenorCantDeEscalas([aeropuerto1, aeropuerto2, aeropuerto3]).nombre;

    expect(aeropuertoConMenosEscalas).toBe(aeropuerto3.nombre);
});