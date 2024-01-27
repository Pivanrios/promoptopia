import menu from "@app/menu/page";

export const GET = async (req)=>{
    console.log("API END POINT")
    try {
        const menu = [
            {
                id: 1,
                name: "Lasagnas",
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
                name: "Hotcakes",
                ingredientes: ["tomate", "cebolla", "carne de res" ],
                price: 9,
                imageUrl: "/icons/peter.png",
                desc: "This is a lasagna with meat and mushrums",
                category: "Breakfast"
            },
            {
                id: 4,
                name: "Pan Frances",
                ingredientes: ["chile", "cebolla", "pollo" ],
                price: 7,
                imageUrl:"/panfrances",
                desc: "This is a lasagna with meat and mushrums",
                category: "Breakfast"
            }
        ]

        return new Response (JSON.stringify(menu))
    } catch (error) {
        console.log(error);
    }
}