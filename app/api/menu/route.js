import menu from "@app/menu/page";

export const GET = async (req)=>{
    console.log("API END POINT")
    try {
        const menu = [
            {
                id: 1,
                name: "Lasagnas",
                ingredientes: ["tomate", "cebolla", "carne de res" ],
                price: 8

            },
            {
                id: 2,
                name: "rajas",
                ingredientes: ["chile", "cebolla", "pollo" ],
                price: 7

            },
            {
                id: 3,
                name: "Hotcakes",
                ingredientes: ["tomate", "cebolla", "carne de res" ],
                price: 9,
                image: "/icons/peter.png"

            },
            {
                id: 4,
                name: "Pan Frances",
                ingredientes: ["chile", "cebolla", "pollo" ],
                price: 7

            }
        ]

        return new Response (JSON.stringify(menu))
    } catch (error) {
        console.log(error);
    }
}