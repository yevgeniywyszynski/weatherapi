import React from "react";
import styles from '../HistorySearch/HistorySearch.module.scss';

const HistorySearch = ({historyList}) => {
    return(
        <>
        <p className={styles.historyTitle}>Historia Wyszukiwań</p>
        <div className={styles.historyWrapper}>
            
            {historyList.map(history =>(
                <div className={styles.weatherWrapper} key={(Math.floor(Math.random() * 1000))}>
                    <div className={styles.weather}>
                        <p className={styles.locationName}>{history.location.name}</p>
                        <p className={styles.celsi}>{history.current?.feelslike_c}°C</p>
                        <img className={styles.imgIcon} src={history.current.condition.icon} alt='weatherIcon'></img>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default HistorySearch;