
//crear menu
const menu = [{id:1, name:"lasagna",price:8}, {id:2, name:"hotcakes", price:4}, {id:3, name:"rajas",price:3}];
//nuevo conjunto
const semana = [{dia:1, platillos:['lasagna','hotcakes']}, {dia:3, platillos:["mole", "burritos"]}];

const checkForDishes = (x, y)=>{
    //const interseccion
    const res = [];
    x.forEach(e=>{//search in every element fo the menu
        y.forEach(j =>{// loop tru every element on platillos de dia de la semana semana
            console.log("j:",j.platillos);
            j.platillos.forEach(dish =>{
                console.log("dish",dish);
                if (dish == e.name){
                    res.push(e);
                }
            })
        })
    } );
    return res;
}
console.log("invoking funcion",checkForDishes(menu, semana));


export default checkForDishes;
