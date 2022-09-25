export const getSearchPhrase = ({searchPhrase}) => searchPhrase;

const reducerName = 'filterPhrase';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_PHARSE = createActionName("CHANGE_PHARSE")
export const changePharse = payload => ({payload, type: CHANGE_PHARSE})

export default function reducer(statePart=[], action = {}) {
    switch(action.type) {
        case CHANGE_PHARSE:
            return action.payload
        default: 
            return statePart
    }
}