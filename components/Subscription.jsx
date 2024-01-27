"use client"

const Subscription = () => {
  return (
    <section className="w-full flex flex-center flex-col ">
        <article className="w-full flex-center flex-col p-10">
                    <table 
                        className="w-full">
                        <thead>
                            <tr className="text-center w-full">
                            <th colSpan="2"
                                className=" border-b-2">Supscripciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr 
                        className="text-center "> 
                        <td>2 Platillos</td>
                        <td>$0.25</td>
                        <td>x platillo</td>
                    </tr>
                    <tr
                        className="text-center border-2 w-full"> 
                        <td>3 Platillos</td>
                        <td>$0.50</td>
                        <td>x platillo</td>
                    </tr>
                    <tr
                        className="text-center border-2"> 
                        <td>4 Platillos</td>
                        <td>$0.75</td>
                        <td>x platillo</td>
                    </tr>
                        </tbody>
                </table>

        </article>
        <article className="w-full flex-center flex-col p-100">
            <h4>Combo</h4>
            <ol>
                <li>Desayuno.......</li>
                <li>Comida.........</li>
                <li>Postre.........</li>
            </ol>
        </article>
        
    </section>
  )
}

export default Subscription