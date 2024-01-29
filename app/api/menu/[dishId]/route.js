const menu = [
    {
        id: 1,
        name: "lasagna",
        ingredientes: ["tomate", "cebolla", "carne de res" ],
        price: 8,
        imageUrl: "/icons/peter.png",
        desc: "This is a lasagna with meat and mushrums",
        category: "Italian"
    },
    {
        id: 2,
        name: "rajas",
        ingredientes: ["chile", "cebolla", "pollo" ],
        price: 7,
        imageUrl: "/icons/peter.png",
        desc: "This is a lasagna with meat and mushrums",
        category: "Mexican"
    },
    {
        id: 3,
        name: "hotcakes",
        ingredientes: ["tomate", "cebolla", "carne de res" ],
        price: 9,
        imageUrl: "/icons/peter.png",
        desc: "This is a lasagna with meat and mushrums",
        category: "Breakfast"
    },
    {
        id: 4,
        name: "pan frances",
        ingredientes: ["chile", "cebolla", "pollo" ],
        price: 7,
        imageUrl:"/panfrances",
        desc: "This is a lasagna with meat and mushrums",
        category: "Breakfast"
    }
]


export const GET = (req, {params})=>{
    console.log("Dish Id:", params.dishId);
    const dish = menu.find(({name})=> name == params.dishId);
    console.log("dish found:", dish);

    return new Response(JSON.stringify(dish));

}