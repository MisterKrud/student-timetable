import { lessonTimes } from "../data/scheduleData";
import styles from './Times.module.css'

const Times = ({time}) =>{
    return(
        time === "9:00" ?  (
<div className ={styles.nine}> 
      
        
        {time}

    </div>
        ) : (
        <div className ={styles.times}> 
      
        
        {time}

    </div>
        )
    )
}

export default Times