export const getHistory = ({historySearch}) => historySearch;

const reducerName = 'historyRedux';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_HISTORY = createActionName('ADD_HISTORY')
export const addHistory = payload => ({payload, type: ADD_HISTORY})


export default function reducer(statePart=[], action = {}) {
    switch(action.type) {
        case ADD_HISTORY:
            return [...statePart, action.payload]
        default: 
            return statePart
    }
}