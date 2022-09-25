import React, {useEffect} from 'react'
import styles from '../Home/Home.module.scss';
import SearchBar from '../SearchBar/SearchBarContainer';

const Home = ({loadWeatherRequest, weatherRedux}) => {
    console.log('weather data', weatherRedux)

    useEffect(() => {
        loadWeatherRequest('Warsaw')
    }, [])

    return(
        <div className={styles.homeWrapper}>
            <SearchBar/>
            <div className={styles.infoWrapper}>
                <div className={styles.dataWrapper}>
                    <p className={styles.dayTitle}>{weatherRedux.current?.last_updated.substring(10,5)}</p>
                    <p className={styles.cityName}>Today in {weatherRedux.location?.name}</p>
                </div>
                <div className={styles.weatherIcon}>
                    <div className={styles.imgIconWraper}>
                        <img className={styles.imgIcon} src={weatherRedux.current?.condition.icon} alt='weatherIcon'></img>
                        <p className={styles.temperatureTitle}>{weatherRedux.current?.temp_c}°C</p>
                    </div>
                    <p className={styles.feelsLikeTitle}>odczuwalność {weatherRedux.current?.feelslike_c}°C</p>
                </div>
            </div>
        </div>
    )
}

export default Home;