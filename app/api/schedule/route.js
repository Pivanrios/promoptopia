


//---> http://localhost:3000/api/schedule

export const GET = async (req) =>{
    console.log("Getting data")
    //create our week
    const week = [
        {
            id:1,
            dia: "miercoles",
            platillo: "lasagna",
            precio: 8
        },
        {
            id:2,
            dia: "jueves",
            platillo: "mole",
            precio: 8
        },
        {
            id:3,
            dia: "viernes",
            platillo: "spaguetti",
            precio: 7
        }
    ]
    console.log("week:", week);
    //response to client: week
    return new Response(JSON.stringify(week))

};