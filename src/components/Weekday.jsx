import Dropdown from "./Dropdown"
import { lessonTimes } from "../data/scheduleData"

const lessonPeriods = lessonTimes.slice(2)

//Should change hard coded lunch and morning tea to pre-set dropdown values
const Weekday = () => {
    return (
        <>
        <div>Roll Call</div>
        <div>Get ready</div>
            {lessonPeriods.map(period => (
                period === '11:00' ? (
                <div>Morning Tea</div>
                ) : period === '1:00' ? (
                    <div>Lunch</div> ) :
                <Dropdown key={period} />
                
            ))
        }
        
        </>
    )
}

export default Weekday