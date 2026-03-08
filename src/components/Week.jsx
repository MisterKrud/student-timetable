import Weekday from "./Weekday";
import Times from "./Times";
import Dropdown from "./Dropdown";
import { weekdays, lessonTimes } from "../data/scheduleData";

import styles from "./Week.module.css";
import React from "react";
import { CalendarDays } from "lucide-react";
const lessonPeriods = lessonTimes.slice(1)
const Week = () => {
  return (
    <div className={styles.weekContainer}>
      <div>Time</div>

      {weekdays.map((day) => (
        <div className={styles.dayContainer} key={day}>
          {day}
        </div>
      ))}
      {lessonTimes.map((time) => (
        <React.Fragment key={time}>
            
          <Times time={time} />

          {weekdays.map((day) => (
            <Dropdown key={day + time} day={day} time={time} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Week;
