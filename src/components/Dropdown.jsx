import {timetableDropDowns} from '../data/courseData'
import styles from './Dropdown.module.css'

const dropdownList = ['',...timetableDropDowns]
const Dropdown = ()  => {

return (
    <div className = {styles.dropdown}>
    <label htmlFor="dropdowns"> </label>   
    <select>{dropdownList.map(t =>(
      <option key = {t}>{t}</option>  
    ))}
       
        </select>
        </div>
)
}

export default Dropdown