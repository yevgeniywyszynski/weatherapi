import React, {useEffect} from 'react'
import styles from '../Home/Home.module.scss';
import SearchBar from '../SearchBar/SearchBarContainer';
import NotFound from '../NotFound/NotFound';
import {formatDate} from '../../common/date_tools'


const Home = ({loadWeatherRequest, weatherRedux,forecastdayList}) => {

    useEffect(() => {
        console.log('prognoza', forecastdayList)
        loadWeatherRequest('Warsaw')
    }, [])

    return(
        <div className={styles.homeWrapper}>
            <SearchBar/>
            {weatherRedux.request?.error ? <NotFound/> 
            :
            <div className={styles.infoWrapper}>
                <div className={styles.dataWrapper}>
                    <p className={styles.dayTitle}>{formatDate(weatherRedux.current?.last_updated)}</p>
                    <p className={styles.cityName}>Today in {weatherRedux.location?.name}</p>
                    <p>{weatherRedux.forecast?.forcastday}</p>
                </div>
                <div className={styles.weatherIcon}>
                    <div className={styles.imgIconWraper}>
                        <img className={styles.imgIcon} src={weatherRedux.current?.condition.icon} alt='weatherIcon'></img>
                        <p className={styles.temperatureTitle}>{weatherRedux.current?.temp_c}°C</p>
                    </div>
                    <p className={styles.feelsLikeTitle}>odczuwalna {weatherRedux.current?.feelslike_c}°C</p>
                </div>
            </div>
            }
            <div>
                {forecastdayList ? forecastdayList.forecastday.slice(1).map(day => (
                    <p>{day.day.maxtemp_c}</p>
                )) : null }
            </div>
        </div>
    )
}

export default Home;