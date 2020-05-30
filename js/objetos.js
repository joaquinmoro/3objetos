// CREACIÓN OBJETO 1

var hotel = {

    // PROPIEDADES
    habitacionesTotal: 40,
    habitacionesOcupadas: 21,
    habitacionesTipo: ["individual", "doble", "suite"],

    // MÉTODO
    habitacionesDisponibles: function() {
        return this.habitacionesTotal - this.habitacionesOcupadas;
    }
}

// ACCEDER A LAS PROPIEDADES DEL OBJETO 1
hotel.habitacionesTotal;            // 40
hotel.habitacionesTipo[0];          // individuals

// ACCEDER AL MÉTODO DEL OBJETO 1
hotel.habitacionesDisponibles();    // 19

/*
--------------------------------------------------------------------------------------------
*/

// CREACIÓN OBJETO 2

var cubo = {

    // PROPIEDADES
    altura: 40,
    anchura: 20,
    profundidad: 10,

    // MÉTODOS
    area: function() {
        return this.altura * this.anchura;
    },
    volumen: function() {
        return this.altura * this.anchura * this.profundidad;
    }
}

// ACCEDER A LAS PROPIEDADES DEL OBJETO 2
cubo.anchura;               // 20

// ACCEDER AL MÉTODO DEL OBJETO 2
cubo.area();                // 800

/*
--------------------------------------------------------------------------------------------
*/

// CREACIÓN OBJETO 2

var hucha = {

    // PROPIEDADES
    monedas2euros: 15,
    monedas1euro: 7,
    monedas50centimos: 10,

    // MÉTODO
    ahorroTotal: function() {
        return (2 * this.monedas2euros) + (1 * this.monedas1euro) + (0.5 * this.monedas50centimos);
    }
}

// ACCEDER A LAS PROPIEDADES DEL OBJETO 2
hucha.monedas1euro;               // 15

// ACCEDER AL MÉTODO DEL OBJETO 2
hucha.ahorroTotal();                // 42