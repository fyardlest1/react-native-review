import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScreenComponents = () => {
    const greeting = "Hi there"
    return (
        <View>
            <Text style={styles.textStyle}>This is me</Text>
            <Text>{greeting}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'green'
    }
})

export default ScreenComponents