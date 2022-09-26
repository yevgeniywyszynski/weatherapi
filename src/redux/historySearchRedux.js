export const getHistory = ({historySearch}) => historySearch;

const reducerName = 'historyRedux';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_HISTORY = createActionName('ADD_HISTORY')
export const addHistory = payload => ({payload, type: ADD_HISTORY})


export default function reducer(statePart=[], action = {}) {
    switch(action.type) {
        case ADD_HISTORY:
            let weatherArray = [...statePart]
            const found = weatherArray.filter(e => e.location.name === action.payload.location.name)
            if(found.length === 0){
                weatherArray.push(action.payload)
            }
            return weatherArray
        default: 
            return statePart
    }
}