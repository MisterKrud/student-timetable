import Weekday from "./Weekday";
import { weekdays } from "../data/scheduleData";
import styles from "./Week.module.css"

const Week = () => {
    return(
        <div className={styles.weekContainer}>
        {weekdays.map(day => 
        <div className ={styles.dayContainer}>
            <div className = {styles.weekdayLabel}>{day}</div>
            <Weekday key={day} />
</div>
            )}
        </div>
    )
}

export default Week