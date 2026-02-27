import styles from './TimetableHeader.module.css'

//Need to add back-end for name, school year etc
//These can come from dems if possible

const TimetabeHeader = () => {
    return(
        <div className = {styles.headerContainer}>
            <div className = {styles.leftHeader}>
            <div className={styles.currentYear}>2026 Timetable</div>
            <div className = {styles.studentDetails}>Student Name - Year 10

            </div>
            </div>
            <div className  ={styles.rightHeader}>
                <div className = {styles.logoContainer}><img className = {styles.logo} src="./DSODELogo.png" /></div>
                <div className ={styles.link}>Stage 5 Hub</div>
            </div>

        
        </div>
    )
}

export default TimetabeHeader