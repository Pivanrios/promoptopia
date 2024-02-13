const menu = [];

const ingredients = [
    { name: "elote", qty: 190, costo: 19},
    { name: "media crema", qty: 250, costo: 17 },
    { name: "pollo", qty: 1000, costo: 90},
    { name: "chile california", qty: 1000, costo: 80 },
    { name: "cebolla", qty: 1000, costo: 10 },
    { name: "sal de ajo", qty: 510, costo: 120},
    { name:"aceite", qty: 480, costo: 62 },
    { name:"arroz", qty: 1000, costo: 35 },
    { name:"agua", qty: 20, costo: 20 }

]

const dish = {
    id:1,
    name: "rajas",
    ingredientes:[
        {name:"elote", qty: 30},
        {name:"media crema", qty:130},
        {name:"pollo", qty: 100},
        {name:"chile california", qty: 100},
        {name:"cebolla", qty: 30},
        {name:"sal de ajo", qty: 1.7},
        {name:"aceite", qty: 25},
        {name:"arroz", qty: 60, tipo: "complemento"},
        {name:"agua", qty: 150, tipo: "complemento"}
    ],
    empaque: [
            {tupper: 16, costo:7}
    ],
    imagenes: ["image.jpeg", "image1.jpeg"],
    hrsHombre:[
        {name: "cocinada", costo: 15, moneda: "pesos" },
        {name: "lavaplatos", costo: 5, moneda: "pesos" },
        {name: "repartidor", costo: 5, moneda: "pesos" }
    ],
    insumos: [
        {name: "luz", costo: 3, moneda: "pesos"},
        {name: "agua", costo: 2, moneda: "pesos"},
        {name: "papel", costo: 1, moneda: "pesos"}
    ],
    precio: {monto: 7, moneda: "dlls"},
    //----------------METHODS-------------
    //costo de produccion
    costoDeProduccion(hrsHombre){
        let total = 0;
        hrsHombre.map( (e) => total = total + e.costo);
        console.log("Total de horas hombre:", total);
        return total;
    },
    //costo de insumos
    costoDeInsumos(insumos){
        let total = 0;
        insumos.map((e)=> total = total + e.costo);
        console.log("Total de insumos:", total);
        return total;
    }
    //costo total de ingredientes 
    //obtener el costo unitario de cada ingrediente
    //multiplicar el costo unitario por la cantidad requerida en el platillo




    //calcular la cantidad de ingredientes que se necesita para n comensales
    //multiplicar la cantidad de ingredientes por el numero de personas
    





}

dish.costoDeInsumos(dish.insumos);
dish.costoDeProduccion(dish.hrsHombre);
menu.push(dish);
console.log("menu:",menu);