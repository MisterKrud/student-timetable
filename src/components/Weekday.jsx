import Dropdown from "./Dropdown"
import { lessonTimes } from "../data/scheduleData"

const lessonPeriods = lessonTimes.slice(2)
const Weekday = () => {
    return (
        <>
            {lessonPeriods.map(period => (
                <Dropdown key={period} />
                
            ))
        }
        
        </>
    )
}

export default Weekday