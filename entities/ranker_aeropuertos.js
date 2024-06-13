export class RankeadorDeAeropuertos {
   
    aeropuertoConMenorCantDeEscalas(aeropuertos) {
        let aeropuertoConMenorEscalas;
        let cantMenorEscalas = Infinity;

        aeropuertos.forEach(a => {
            if (a.cantEscalas() < cantMenorEscalas) {
                cantMenorEscalas = a.cantEscalas();
                aeropuertoConMenorEscalas = a;
            }
        });

        return aeropuertoConMenorEscalas;
    }
}