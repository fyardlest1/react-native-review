import React, { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from './../components/ColorCounter';

// const COLOR_INCREMENT = Math.floor(Math.random() * 256)
const COLOR_INCREMENT = 15

// create the reducer function
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: green || red || blue, amount: 15 || -15 }
    // to follow the community convention we will have (type and payload) instead:
    // action === { type: 'change_green' || 'change_red' || 'change_blue', payload: 15 || -15 }

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state : { ...state, red: state.red + action.payload }             
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const SquareScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    // a better name for dispatch will be: runMyReducer
    // the initial value of the state === { red: 0, green: 0, blue: 0 }
    const { red, green, blue } = state

    return (
        <View>
            <ColorCounter 
                // onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                // onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color='Red'
                />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color='Green'
                />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color='Blue'
            />
            <View style={{
                height: 150, width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`,
                margin: 25
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreenReducer
