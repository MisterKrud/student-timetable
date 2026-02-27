import Weekday from "./Weekday";
import Times from "./Times";
import { weekdays } from "../data/scheduleData";
import styles from "./Week.module.css"

const Week = () => {
    return(
        <div className={styles.weekContainer}>
            <Times />
        {weekdays.map(day => 
        <div className ={styles.dayContainer} key={day}>
            <div className = {styles.weekdayLabel}>{day}</div>
            <Weekday key={day} />
</div>
            )}
        </div>
    )
}

export default Week