import { connect } from "react-redux";
import Home from './Home';
import { loadWeatherRequest, getWeather, getForecast } from "../../redux/weatherRedux";

const mapStateToProps = state => ({
    weatherRedux: getWeather(state),
    forecastdayList: getForecast(state)
})

const mapDisptachToProps = dispatch => ({
    loadWeatherRequest: (searchPharse) => dispatch(loadWeatherRequest(searchPharse)),
})

export default connect(mapStateToProps, mapDisptachToProps )(Home);