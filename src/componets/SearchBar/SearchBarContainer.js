import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import {changePharse,getSearchPhrase} from "../../redux/searchPhraseRedux";
import { loadWeatherRequest, getWeather} from "../../redux/weatherRedux";
import { addHistory } from "../../redux/historySearchRedux";

const mapStateToProps = state => ({
    phrase: getSearchPhrase(state),
    weatherRedux: getWeather(state)
})

const mapDisptachToProps = dispatch => ({
    changePhrase: (phrase) => dispatch(changePharse(phrase)),
    loadWeatherRequest: (searchPharse) => dispatch(loadWeatherRequest(searchPharse)),
    addHistory: (historyObj) => dispatch(addHistory(historyObj))
})

export default connect(mapStateToProps, mapDisptachToProps )(SearchBar);