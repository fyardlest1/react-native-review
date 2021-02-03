import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: -1 }
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count + action.payload }
        default:
            return state;
    }
}

const CounterScreen = () => {
    // let's refactor the code to use useReducer instead of useState
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const {count} = state

    return (
        <View>
            <Button title='Increase' onPress={() => {
                // do not do this
                // counter++
                // setCounter(counter + 1)
                dispatch({ type: 'increment', payload: 1 })
            }} />
            <Button title='Decrease' onPress={() => {
                // setCounter(counter - 1)
                dispatch({ type: 'decrement', payload: -1 })
            }} />
            <Text>Current Count: {count}</Text>
        </View>
    )
}

export default CounterScreen
