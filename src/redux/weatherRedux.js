import axios from "axios";

export const getWeather = ({weather}) => weather;
export const getForecast = ({weather}) => weather.forecast

const reducerName = 'weather';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_WEATHER = createActionName('LOAD_WEATHER');

export const startRequest = () => ({type: START_REQUEST});
export const endRequest = () => ({type: END_REQUEST});
export const errorRequest = payload => ({payload, type: ERROR_REQUEST});

export const loadWeather = payload => ({payload, type: LOAD_WEATHER});


export const loadWeatherRequest = (searchPharse) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            let weatherData = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=cad5cd8da0bd44f7b00104658220904&q=${searchPharse}&days=4`)
            dispatch(loadWeather(weatherData.data))
            dispatch(endRequest())
        } catch(e) {
            console.log(e)
            dispatch(errorRequest({name: 'ERROR_REQUEST', error: 'could not fetch data'}));
        }
    }
}

export default function reducer(statePart = [], action = {}) {
    switch(action.type) {
        case LOAD_WEATHER:
            return action.payload
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: false}}
        case END_REQUEST: 
            return {...statePart, request: {pending: false, error: null, success: true}}
        case ERROR_REQUEST: 
            return {...statePart, request: { pending: false, error: action.payload.error, success: false}}
        default:
            return statePart
    }
}