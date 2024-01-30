


//---> http://localhost:3000/api/schedule

export const GET = async (req) =>{
    console.log("Getting data")
    //create our week
    const week = [
        {
            id:1,
            dia: "31",
            platillos: ["lasagna","hotcakes"]
        },
        {
            id:2,
            dia: "1",
            platillos: ["mole", "burritos"]
        },
        {
            id:3,
            dia: "2",
            platillos: ["spaguetti","pan frances"]
        }
    ]
    console.log("week:", week);
    //response to client: week
    return new Response(JSON.stringify(week))

};