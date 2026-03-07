import { lessonTimes } from "../data/scheduleData";
import styles from './Times.module.css'

const Times = () =>{
    return(
    <div className ={styles.times}>
        <div className={styles.timesHeader}>Time</div>
        
        {lessonTimes.map(time => (
            <div key={time} className={styles.lessonTimes}>{time}</div>
        ))}

    </div>
    )
}

export default Times