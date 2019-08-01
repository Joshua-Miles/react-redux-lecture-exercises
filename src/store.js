import { createStore } from 'redux'

const initialState = {
    count: 0
}

const reducer = ( state, action ) => {
    switch(action.type){
        case 'INCREMENT_COUNT':
            state.counter = state.counter + 1
            return state
        break;
    }
    return state
}

export const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)