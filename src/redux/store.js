import { applyMiddleware, combineReducers, createStore, compose} from "redux"
import weatherRedux from '../redux/weatherRedux';
import searchPhraseRedux from '../redux/searchPhraseRedux';
import historySearchRedux from '../redux/historySearchRedux';
import thunk from 'redux-thunk'

const initalState = {
    weather: {},
    searchPhrase: '',
    historySearch: []
}

const reducers = {
    weather: weatherRedux,
    searchPhrase: searchPhraseRedux,
    historySearch: historySearchRedux
}

const storeReducer = combineReducers(reducers);

const store = createStore (
    storeReducer,
    initalState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
)

export default store;