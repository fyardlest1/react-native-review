import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    return (
        <View>
            <Text style={styles.title}>Enter Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.title}>My name is: {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    title: {
        marginTop: 5,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default TextScreen
