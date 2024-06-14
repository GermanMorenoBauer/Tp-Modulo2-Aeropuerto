import { Ciudad } from "../entities/ciudad";
import {Aeropuerto} from "../entities/aeropuerto";

test("Le paso una ciudad con 3 aeropuertos y tiene que devolverme 3", ()=>{
    let ciudad = new Ciudad("Buenos Aires");
    let aeropuerto1 = new Aeropuerto();
    let aeropuerto2 = new Aeropuerto();
    let aeropuerto3 = new Aeropuerto();

    aeropuerto1.nombre = "Aeropuerto Ezeiza";
    aeropuerto2.nombre = "Aeroparque CABA";
    aeropuerto3.nombre = "Aeropuerto Liniers (algun dia)";

    ciudad.agregarAeropuerto(aeropuerto1);
    ciudad.agregarAeropuerto(aeropuerto2);
    ciudad.agregarAeropuerto(aeropuerto3);

    expect(ciudad.cantAeropuertos()).toBe(3);
    
});
