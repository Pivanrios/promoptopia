

const Calendar = () => {

    const calendarUpdates = [{id:1, date:"1/1/12", platillos:["lasagna", "pure"]}]
    const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]



  return (
    <div className="flex justify-center">
        <h4 className="justify-self-center">Mes</h4>
        <div className="grid grid-flow-col grid-cols-7 w-full">
            {days.map((day)=>(
                <p className="p-2">{day}</p>
            ))}
        </div>

    </div>
  )
}

export default Calendar