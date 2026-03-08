import Dropdown from "./Dropdown"
import { lessonTimes } from "../data/scheduleData"

const lessonPeriods = lessonTimes.slice(1)

//Should change hard coded lunch and morning tea to pre-set dropdown values
const Weekday = () => {
    return (
        <>
        <div>Roll Call</div>
        <div>Get ready</div>
            {lessonPeriods.map(period => (
                // period === '11:00' ? (
                // // <div>Morning Tea</div>
                // <Dropdown key={period} value="Morning Tea" />
                // ) : period === '1:00' ? (
                //     <div>Lunch</div> ) :
                <div>{period}</div>
                
            ))
        }
        
        </>
    )
}

export default Weekday