import menu from "@app/menu/page";

export const GET = async (req)=>{
    console.log("API END POINT")
    try {
        const menu = [
            {
                id: 1,
                name: "lasagna",
                ingredientes: ["tomate", "cebolla", "carne de res" ],
                price: 8,
                imageUrl: `/images/lasagna.jpeg`,
                desc: "This is a lasagna with meat and mushrums",
                category: "pasta"
            },
            {
                id: 2,
                name: "rajas",
                ingredientes: ["chile", "cebolla", "pollo" ],
                price: 7,
                imageUrl: "/images/rajas.jpeg",
                desc: "This is a lasagna with meat and mushrums",
                category: "Mexican"
            },
            {
                id: 3,
                name: "hotcakes",
                ingredientes: ["tomate", "cebolla", "carne de res" ],
                price: 9,
                imageUrl: "/images/hotcakes.jpeg",
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
            },{
                id:5,
                name: "spaguetti",
                ingredientes:["Salsa Champ", "Cebolla", "Carne Molida de res"],
                price: 7,
                imageUrl:"/lasagna.jpeg",
                desc:"This is a spaguetti a la bolonesa",
                category:"pasta"
            },{
                id:6,
                name: "mole",
                ingredientes: ["dona maria", "pollo", "chocolate"],
                price:8,
                imageUrl:"/images/lasagna.jepg",
                desc:"this is sweet mole with chocolate",
                category:"mexican"
            },{
                id:7,
                name: "burritos",
                ingredientes: ["huevo", "jamon"],
                price: 2,
                imageUrl: "/images/lasagna.jpeg",
                desc:"web it toes come ham on",
                category:"breakfast"
            }
        ]

        return new Response (JSON.stringify(menu))
    } catch (error) {
        console.log(error);
    }
}