


//---> http://localhost:3000/api/schedule

export const GET = async (req) =>{
    console.log("Getting data")
    //create our week
    const week = [
        {
            id:1,
            dia: "31",
            platillos: [{name:"lasagna", precio:8}, {name: "hotcakes", precio:8}]
        },
        {
            id:2,
            dia: "1",
            platillos: [{name:"mole", precio:8}, {name: "burritos", precio:2}]
        },
        {
            id:3,
            dia: "2",
            platillos: [{name:"spaguetti", precio:7}, {name: "pan frances", precio:7}]
        }
    ]
    console.log("week:", week);
    //response to client: week
    return new Response(JSON.stringify(week))

};