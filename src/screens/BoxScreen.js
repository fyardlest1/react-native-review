import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
            {/* <Text style={styles.textOneStyle}>Child # 1</Text>
            <Text style={styles.textTwoStyle}>Child # 2</Text>
            <Text style={styles.textThreeStyle}>Child # 3</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    },
    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     flex: 1,
    //     fontSize: 18,
    //     ...StyleSheet.absoluteFillObject
    // },
    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    // },
})

export default BoxScreen
