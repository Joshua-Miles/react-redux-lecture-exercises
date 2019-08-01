## Assessment 1
```javascript

const initialState = {
    counter: 0
}

const reducer = ( state, action ) => {
    switch(action.type){
        case 'INCREMENT_COUNTER':
            return { counter: state.counter + 1 }
        break;
    }
    return state
}

export const store = createStore(
    reducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

 store.dispatch({ type: 'INCREMENT_COUNTER' })
 store.dispatch({ type: 'INCREMENT_COUNTER' })

```

## Assessment 2

```javascript
// Header.js
const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = {}

export const Header = connect(mapStateToProps, mapDispatchToProps)(props => (
    <h1>The Count is: {props.count}</h1>
))
```

```javascript
// Button.js
const mapStateToProps= state => {
    return {}
}

const mapDispatchToProps = {
    incrementCount: () => ({ type: 'INCREMENT_COUNTER' })
}

export const Button =  connect(mapStateToProps, mapDispatchToProps)(props => (
    <button onClick={props.incrementCount}>Increase Count</button>
))
```