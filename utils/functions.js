
//crear menu
const menu = [{id:1, name:"lasagna",price:8}, {id:2, name:"hotcakes", price:4}, {id:3, name:"rajas",price:3}];
//nuevo conjunto
const lunes = [{dia:1, name:'lasagna'}, {dia:3, name:"rajas"}];

const checkForDishes = (x, y)=>{
    //const interseccion
    const res = [];
    x.forEach(e=>{//search in every element fo the menu
        y.forEach(j =>{// loop tru every element on day
            if(e.name == j.name){
                res.push(e);
            }
        })
    } );
    return res;
}
console.log("invoking funcion",checkForDishes(menu, lunes));

export default checkForDishes();